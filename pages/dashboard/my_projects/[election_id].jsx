/* eslint-disable no-unused-vars */
import logo from '../../../public/images/test.png';
import {
    Dashboard_Layout,
    Details_Item,
    Election_Property_Card,
    Select,
} from '../../../components';
import { useRouter } from 'next/router';
import styles from '../../../styles/dashboard/my_projects/[election_id].module.css';
import { useContext, useEffect, useState } from 'react';
import Modal_Layout from '../../../layouts/modal_layout';
import Image from 'next/image';
import { Small_Loader } from '../../../components/index';

import {
    close_a_round,
    get_an_election,
    get_electors,
    get_posts_of_election,
    get_rounds_for_a_post,
    send_email,
    start_a_round,
} from '../../../requests';
import Link from 'next/link';
import { applicationContext } from '../../_app';
import { Icon } from '@iconify/react';

export default function Election() {
    const { token } = useContext(applicationContext);
    const { query } = useRouter();
    const { election_id } = query;
    const [show_loader, set_show_loader] = useState(false);
    const [tooltip_text, set_tooltip_text] = useState('');
    const [correct_button, set_correct_button] = useState('');

    const [election, set_election] = useState([]);
    async function get_election_info() {
        const data = await get_an_election(election_id, token);
        // const candidates_number = data.map(())
        let candidates_number = 0;
        for (let i = 0; i < data?.posts.length; i++) {
            candidates_number =
                candidates_number + data.posts[i].candidates.length;
        }

        set_election({ ...data, candidates_number });
    }

    useEffect(() => {
        get_election_info();
    }, [query]);

    useEffect(() => {
        set_correct_button(return_correct_button());
    }, [election]);
    console.log('response', election);

    async function begin_round() {
        for (let i = 0; i < election?.posts.length; i++) {
            const current_post = election.posts[i];

            for (let j = 0; j < current_post.rounds.length; j++) {
                const current_round = current_post.rounds[j];

                if (current_round.status === 'Not started') {
                    const response = await start_a_round(
                        current_round._id,
                        token
                    );
                }
            }
        }
        get_election_info();
    }

    async function close_round() {
        for (let i = 0; i < election?.posts.length; i++) {
            const current_post = election.posts[i];

            for (let j = 0; j < current_post.rounds.length; j++) {
                const current_round = current_post.rounds[j];

                if (current_round.status === 'In progress') {
                    const response = await close_a_round(
                        current_round._id,
                        token
                    );
                }
            }
        }
        get_election_info();
    }

    function return_correct_button() {
        if (election.posts) {
            if (election.posts[0].rounds[0].status === 'Not started') {
                set_tooltip_text('Commencer le round 1');
                return (
                    <Icon
                        icon="carbon:play-filled"
                        className={styles.play_icon}
                        onClick={begin_round}
                    />
                );
            } else if (election.posts[0].rounds[0].status === 'In progress') {
                set_tooltip_text('Arrêter le round 1');
                return (
                    <Icon
                        icon="carbon:stop-filled"
                        className={styles.play_icon}
                        onClick={close_round}
                    />
                );
            } else if (election.posts[0].rounds[0].status === 'Completed') {
                if (election.posts[0].rounds[1].status === 'Not started') {
                    set_tooltip_text('Commencer le round 2');
                    return (
                        <Icon
                            icon="carbon:play-filled"
                            className={styles.play_icon}
                            onClick={begin_round}
                        />
                    );
                } else if (
                    election.posts[0].rounds[1].status === 'In progress'
                ) {
                    set_tooltip_text('Arrêter le round 2');
                    return (
                        <Icon
                            icon="carbon:stop-filled"
                            className={styles.play_icon}
                            onClick={close_round}
                        />
                    );
                } else  {
                    return (
                        <Link href={`../../result_page/${election_id}`}>
                            <p className="pointer">Résultats</p>
                        </Link>
                    );
                }
            }
        }
    }

    return (
        <Dashboard_Layout page_title="Mes projets">
            <section>
                <div className={styles.header}>
                    <div>
                        <Image
                            src={logo}
                            alt="Picture of the author"
                            width={85}
                            height={88}
                            className={styles.election_card__image}
                        />
                        <div>
                            <h1>{election?.name}</h1>
                            <p>Statut: En cours</p>
                            {/* {election_posts_and_rounds[0]?.rounds[0].status ==
                            'Not started' ? (
                                <p> Commencer </p>
                            ) : election_posts_and_rounds[0]?.rounds[0]
                                  .status == 'In progress' ? (
                                <p> En cours </p>
                            ) : (
                                <p>Terminé </p>
                            )} */}
                        </div>
                    </div>

                    {/* <Icon icon="carbon:play-filled" className="icon"  /> */}
                    <div title="Test">{correct_button}</div>
                    {tooltip_text}
                </div>
                <div className={styles.cards}>
                    <Election_Property_Card
                        label={election?.electors?.length}
                        title="Electeurs"
                        icon="fluent:vote-24-filled"
                    />
                    <Election_Property_Card
                        label={election?.candidates_number}
                        title="Candidats"
                        icon="fluent:vote-24-filled"
                    />
                    <Election_Property_Card
                        label={election?.posts?.length}
                        title="Poste à pourvoir"
                        icon="fluent:vote-24-filled"
                    />
                    <Election_Property_Card
                        label={election?.two_rounds ? '2' : '1'}
                        title="Tour(s)"
                        icon="fluent:vote-24-filled"
                    />
                </div>

                <div className={styles.details}>
                    <div className={styles.thead}>
                        <div>N°</div>
                        <div>Prénom</div>
                        <div>Nom</div>
                        <div>Acctions</div>
                    </div>
                    {election?.electors?.map((elector, index) => (
                        <Details_Item
                            key={index}
                            index={index}
                            item={elector}
                        />
                    ))}
                </div>
            </section>
        </Dashboard_Layout>
    );
}
