import Head from 'next/head';
import styles from '../../styles/dashboard/general_parameters.module.css';
import { Left_Section } from '../../components/index';
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
                    <h1>Nouveau projet : Comité G1 Math-Info</h1>
                    <h2>Paramètres généraux</h2>
                    <div>
                        <label className="email_group">
                            <span className="group_label">Votre email</span>
                            <div className={styles.input_group}>
                                <Icon icon="ic:round-email" className="icon" />
                                <input
                                    type="email"
                                    placeholder="placide@gmail.com"
                                />
                            </div>
                        </label>
                    </div>
                </section>
            </main>
        </div>
    );
}
