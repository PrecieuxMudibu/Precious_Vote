/* eslint-disable no-unused-vars */
import logo from '../../../public/images/test.png';
import {
    Dashboard_Layout,
    Details_Item,
    Election_Property_Card,
} from '../../../components';
import { useRouter } from 'next/router';
import styles from '../../../styles/dashboard/my_projects/[election_id].module.css';
import { useEffect, useState } from 'react';
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

export default function Election() {
    const { query } = useRouter();
    const { election_id } = query;
    const [show_loader, set_show_loader] = useState(false);
    const [display, set_display] = useState('candidates');

    const [election, set_election] = useState([]);
    async function get_election_info() {
        const data = await get_an_election(election_id);
        // const candidates_number = data.map(())
        let candidates_number = 0;
        for (let i = 0; i < data?.posts.length; i++) {
            candidates_number =
                candidates_number + data.posts[i].candidates.length;
        }

        console.log('candidates_number', candidates_number);
        set_election({ ...data, candidates_number });
    }

    useEffect(() => {
        get_election_info();
    }, [query]);
    console.log('response', election);

    async function begin_round() {
        // START THE FIRST ROUNDS OF ALL POSTS
        set_show_loader(true);
        // for (let i = 0; i < election_posts_and_rounds.length; i++) {
        //     const round_id = election_posts_and_rounds[i].rounds[0]._id;
        //     let response = await start_a_round(round_id);
        //     console.log('response>>>' + i, response);
        // }

        // SEND NOTIFICATION MAIL TO ALL ELECTORS OF THE ELECTION
        // for (let i = 0; i < electors.length; i++) {
        //     const current_elector = {
        //         first_name: electors[i].first_name,
        //         name: electors[i].name,
        //         email: electors[i].email,
        //         token_for_vote: electors[i].token_for_vote,
        //     };
        //     // eslint-disable-next-line no-unused-vars
        //     let response = await send_email({
        //         election_id: election_id,
        //         elector: current_elector,
        //     });
        // }

        // // If the rounds are closed , display "Terminé"
        // get_post_and_rounds();
        // set_show_loader(false);
    }

    async function close_round() {
        set_show_loader(true);

        // START THE FIRST ROUNDS OF ALL POSTS
        // for (let i = 0; i < election_posts_and_rounds.length; i++) {
        //     const round_id = election_posts_and_rounds[i].rounds[0]._id;
        //     let response = await close_a_round(round_id);
        //     console.log('response>>>' + i, response);
        // }
        // // If the rounds are closed , display "Terminé"
        // get_post_and_rounds();
        // set_show_loader(false);
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

                    {/* {election_posts_and_rounds[0]?.rounds[0].status ==
                    'Not started' ? (
                        show_loader ? (
                            <button className="button_primary">
                                <Small_Loader color="white" />
                            </button>
                        ) : (
                            <button
                                className="button_primary"
                                onClick={() => begin_round()}
                            >
                                Commencer
                            </button>
                        )
                    ) : election_posts_and_rounds[0]?.rounds[0].status ==
                      'In progress' ? (
                        show_loader ? (
                            <button className="button_primary">
                                <Small_Loader color="white" />
                            </button>
                        ) : (
                            <button
                                className="button_primary"
                                onClick={() => close_round()}
                            >
                                Arrêter
                            </button>
                        )
                    ) : (
                        <Link href={`../../result_page/${election_id}`}>
                            <p className="pointer">Résultats </p>
                        </Link>
                    )} */}
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
                        <div>Photo</div>
                        <div>Prénom</div>
                        <div>Nom</div>
                        <div>Nombre de voix</div>
                        <div>Pourcentage de voix</div>
                    </div>
                    {/* {candidates?.map((candidate, index) => (
                        <Details_Item
                            key={index}
                            index={index}
                            candidate={candidate}
                            percentage={(
                                (candidate.voices * 100) /
                                electors.length
                            ).toFixed(2)}
                        />
                    ))} */}

                    {display === 'candidates' && <>Candidats</>}
                    {display === 'electors' && <>Electeurs</>}
                </div>
            </section>
        </Dashboard_Layout>
    );
}
