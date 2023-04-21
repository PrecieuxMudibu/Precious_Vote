import logo from '../../../public/images/test.png';
import { Dashboard_Layout } from '../../../components';
import { useRouter } from 'next/router';
import styles from '../../../styles/dashboard/my_projects/[election_id].module.css';
import { useEffect, useState } from 'react';
import Modal_Layout from '../../../components/layouts/modal_layout';
import Image from 'next/image';

import {
    get_posts_of_election,
    get_rounds_for_a_post,
    start_a_round,
} from '../../../requests';

export default function Election() {
    const { query } = useRouter();
    const { election_id } = query;

    const [open_post, set_open_post] = useState(false);
    const open_modal_post = () => set_open_post(true);
    const close_modal_post = () => set_open_post(false);

    const [open_electors, set_open_electors] = useState(false);
    const open_modal_electors = () => set_open_electors(true);
    const close_modal_electors = () => set_open_electors(false);

    const [open_rounds, set_open_rounds] = useState(false);
    const open_modal_rounds = () => set_open_rounds(true);
    const close_modal_rounds = () => set_open_rounds(false);

    const [election_posts_and_rounds, set_election_posts_and_rounds] = useState(
        []
    );

    async function begin_round() {
        let post_and_rounds = [];
        const posts = await get_posts_of_election(election_id);

        // GET THE ROUNDS FOR ALL POST
        for (let i = 0; i < posts.length; i++) {
            const rounds = await get_rounds_for_a_post(posts[i]._id);
            post_and_rounds.push({
                post: posts[i],
                ...rounds,
            });
        }

        // START THE FIRST ROUNDS OF ALL POSTS
        for (let i = 0; i < post_and_rounds.length; i++) {
            const round_id = post_and_rounds[i].rounds[0]._id;
            let response = await start_a_round(round_id);
            console.log('response>>>' + i, response);
        }

        set_election_posts_and_rounds([...post_and_rounds]);
    }

    useEffect(() => {
        console.log('election_posts_and_rounds>>>', election_posts_and_rounds);
    }, [election_posts_and_rounds]);
    
    return (
        <Dashboard_Layout page_title="Mes projets">
            <section>
                <div className={styles.header}>
                    <div>
                        {/* <img src="" alt="" /> */}
                        <Image
                            src={logo}
                            alt="Picture of the author"
                            width={85}
                            height={88}
                            className={styles.election_card__image}
                        />
                        <h1>Comité G1 Math-Info</h1>
                    </div>

                    <button
                        className="button_primary"
                        onClick={() => begin_round()}
                    >
                        Commencer
                    </button>
                </div>
                <div className={styles.cards}>
                    <div
                        className={styles.card}
                        onClick={() => open_modal_post()}
                    >
                        <h3 className={styles.card_title}>Poste à pourvoir</h3>
                        <p className={styles.card_paragraph}>5</p>
                    </div>

                    <div
                        className={styles.card}
                        onClick={() => open_modal_electors()}
                    >
                        <h3 className={styles.card_title}>Poste à pourvoir</h3>
                        <p className={styles.card_paragraph}>5</p>
                    </div>
                    <div
                        className={styles.card}
                        onClick={() => open_modal_rounds()}
                    >
                        <h3 className={styles.card_title}>Poste à pourvoir</h3>
                        <p className={styles.card_paragraph}>5</p>
                    </div>
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
