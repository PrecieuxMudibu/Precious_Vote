import { Dashboard_Layout } from '../../../components';
import { useRouter } from 'next/router';
import styles from '../../../styles/dashboard/my_projects/[election_id].module.css';
import { useState } from 'react';
import Modal_Layout from '../../../components/layouts/modal_layout';

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

    // const { push } = useRouter();
    return (
        <Dashboard_Layout page_title="Mes projets">
            <section>
                {election_id} <br />
                <div>
                    <img src="" alt="" />
                    <h1>Comité G1 Math-Info</h1>
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
                    <div className={styles.card} onClick={() => open_modal_rounds()}>
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
