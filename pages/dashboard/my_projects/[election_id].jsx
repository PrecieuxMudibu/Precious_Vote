/* eslint-disable no-unused-vars */
import logo from '../../../public/images/test.png';
import { Dashboard_Layout } from '../../../components';
import { useRouter } from 'next/router';
import styles from '../../../styles/dashboard/my_projects/[election_id].module.css';
import { useEffect, useState } from 'react';
import Modal_Layout from '../../../components/layouts/modal_layout';
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

    const [open_post, set_open_post] = useState(false);
    const open_modal_post = () => set_open_post(true);
    const close_modal_post = () => set_open_post(false);

    const [open_electors, set_open_electors] = useState(false);
    const open_modal_electors = () => set_open_electors(true);
    const close_modal_electors = () => set_open_electors(false);

    const [open_rounds, set_open_rounds] = useState(false);
    const open_modal_rounds = () => set_open_rounds(true);
    const close_modal_rounds = () => set_open_rounds(false);

    const [election, set_election] = useState([]);
    async function get_election_info() {
        set_election(await get_an_election(election_id));
    }
    useEffect(() => {
        get_election_info();
    }, []);

    const [posts, set_posts] = useState([]);
    async function get_posts() {
        set_posts(await get_posts_of_election(election_id));
    }

    const [electors, set_electors] = useState([]);
    async function get_electors_of_election() {
        set_electors(await get_electors(election_id));
    }
    useEffect(() => {
        get_posts();
        get_electors_of_election();
    }, [election]);

    const [election_posts_and_rounds, set_election_posts_and_rounds] = useState(
        []
    );
    async function get_post_and_rounds() {
        let post_and_rounds = [];
        // GET THE ROUNDS FOR ALL POST
        for (let i = 0; i < posts?.length; i++) {
            const rounds = await get_rounds_for_a_post(posts[i]._id);
            post_and_rounds.push({
                post: posts[i],
                ...rounds,
            });
        }
        set_election_posts_and_rounds([...post_and_rounds]);
    }
    useEffect(() => {
        get_post_and_rounds();
    }, [posts, electors]);

    useEffect(() => {
        console.log('election_posts_and_rounds>>', election_posts_and_rounds);
    }, [election_posts_and_rounds]);

    async function begin_round() {
        // START THE FIRST ROUNDS OF ALL POSTS
        set_show_loader(true);
        for (let i = 0; i < election_posts_and_rounds.length; i++) {
            const round_id = election_posts_and_rounds[i].rounds[0]._id;
            let response = await start_a_round(round_id);
            console.log('response>>>' + i, response);
        }

        // SEND NOTIFICATION MAIL TO ALL ELECTORS OF THE ELECTION
        for (let i = 0; i < electors.length; i++) {
            const current_elector = {
                first_name: electors[i].first_name,
                name: electors[i].name,
                email: electors[i].email,
                token_for_vote: electors[i].token_for_vote,
            };
            // eslint-disable-next-line no-unused-vars
            let response = await send_email({
                election_id: election_id,
                elector: current_elector,
            });
        }

        // If the rounds are closed , display "Terminé"
        get_post_and_rounds();
        set_show_loader(false);
    }

    async function close_round() {
        set_show_loader(true);

        // START THE FIRST ROUNDS OF ALL POSTS
        for (let i = 0; i < election_posts_and_rounds.length; i++) {
            const round_id = election_posts_and_rounds[i].rounds[0]._id;
            let response = await close_a_round(round_id);
            console.log('response>>>' + i, response);
        }
        // If the rounds are closed , display "Terminé"
        get_post_and_rounds();
        set_show_loader(false);
    }

    useEffect(() => {
        console.log('election_posts_and_rounds>>>', election_posts_and_rounds);
    }, [election_posts_and_rounds]);

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

                            {election_posts_and_rounds[0]?.rounds[0].status ==
                            'Not started' ? (
                                <p> Commencer </p>
                            ) : election_posts_and_rounds[0]?.rounds[0]
                                  .status == 'In progress' ? (
                                <p> En cours </p>
                            ) : (
                                <p>Terminé </p>
                            )}
                        </div>
                    </div>

                    {election_posts_and_rounds[0]?.rounds[0].status ==
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
                    )}
                </div>
                <div className={styles.cards}>
                    <div
                        className={styles.card}
                        onClick={() => open_modal_post()}
                    >
                        <h3 className={styles.card_title}>Poste à pourvoir</h3>
                        <p className={styles.card_paragraph}>{posts?.length}</p>
                    </div>

                    <div
                        className={styles.card}
                        onClick={() => open_modal_electors()}
                    >
                        <h3 className={styles.card_title}>Electeurs</h3>
                        <p className={styles.card_paragraph}>
                            {electors?.length}
                        </p>
                    </div>

                    {/* <div
                        className={styles.card}
                        onClick={() => open_modal_rounds()}
                    >
                        <h3 className={styles.card_title}>Poste à pourvoir</h3>
                        <p className={styles.card_paragraph}>
                            {election_posts_and_rounds.length}
                        </p>
                    </div> */}
                </div>
                <Modal_Layout open={open_post} close_modal={close_modal_post}>
                    <h1>Post 1</h1>
                </Modal_Layout>
                <Modal_Layout
                    open={open_electors}
                    close_modal={close_modal_electors}
                >
                    <h1>Electeurs</h1>
                </Modal_Layout>
                <Modal_Layout
                    open={open_rounds}
                    close_modal={close_modal_rounds}
                >
                    <h1>Nombre de tours</h1>
                </Modal_Layout>
            </section>
        </Dashboard_Layout>
    );
}
