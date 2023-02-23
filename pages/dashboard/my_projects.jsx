import Head from 'next/head';
import styles from '../../styles/dashboard/my_projects.module.css';
import {
    Left_Section,
    Election_Card,
    Create_Election_Card,
} from '../../components/index';
import { Icon } from '@iconify/react';

export default function My_Projects() {
    return (
        <div className={styles.page}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Left_Section />

                <section>
                    <div className={styles.title_and_search_bar}>
                        <h1>Vos projets</h1>
                        <div>
                            <Icon icon="ic:outline-search" className="icon" />
                            <input
                                type="email"
                                placeholder="Recherchez votre projet ici"
                            />
                        </div>
                    </div>
                    <Create_Election_Card />

                    <div className={styles.elections_group}>
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                        <Election_Card />
                    </div>
                </section>
            </main>
        </div>
    );
}
