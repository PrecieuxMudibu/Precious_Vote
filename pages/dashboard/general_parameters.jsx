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

                    <div className={styles.columns}>
                        <div>
                            <label>
                                <span>Nom de votre élection</span>
                                <div className="input_group">
                                    <Icon
                                        icon="ic:round-drive-file-rename-outline"
                                        className="icon"
                                    />
                                    <input
                                        type="text"
                                        placeholder="placide@gmail.com"
                                    />
                                </div>
                            </label>

                            <label>
                                <span>Description</span>
                                <div className="input_group">
                                    <Icon
                                        icon="fluent:text-description-24-filled"
                                        className="icon"
                                    />
                                    <textarea name="description"></textarea>
                                </div>
                            </label>
                        </div>

                        <div>
                            <label>
                                <span>Début</span>
                                <div className="input_group">
                                    <Icon
                                        icon="material-symbols:calendar-month"
                                        className="icon"
                                    />
                                    <input
                                        type="email"
                                        placeholder="placide@gmail.com"
                                    />
                                </div>
                            </label>

                            <label>
                                <span>Fin</span>
                                <div className="input_group">
                                    <Icon
                                        icon="material-symbols:calendar-month"
                                        className="icon"
                                    />
                                    <input
                                        type="email"
                                        placeholder="placide@gmail.com"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className={styles.buttons_group}>
                        <button className="button_primary">Précédent</button>
                        <button className="button_primary">Suivant</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
