import Head from 'next/head';
import styles from '../../styles/dashboard/position_to_be_filled.module.css';
import { Left_Section } from '../../components/index';
import { Icon } from '@iconify/react';

export default function Position_To_Be_Filled() {
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
                    <h2>Etape 2 : Postes à pourvoir</h2>
                    <div>
                        <p>
                            Vous souhaitez organiser des élections pour combien
                            de postes ?
                        </p>

                        <label className={styles.number_of_post}>
                            <div className="input_group">
                                <Icon
                                    icon="material-symbols:confirmation-number"
                                    className="icon"
                                />
                                <select
                                    name="pays"
                                    id="pays"
                                >
                                    <option value="france">1</option>
                                    <option value="espagne">2</option>
                                    <option value="espagne">3</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <div className={styles.list_of_posts}>
                        <label>
                            <span>Poste 1</span>
                            <div className="input_group">
                                <Icon
                                    icon="eos-icons:role-binding"
                                    className="icon"
                                />
                                <select name="pays" id="pays">
                                    <option value="france">France</option>
                                    <option value="espagne">Espagne</option>
                                </select>
                            </div>
                        </label>

                        <label>
                            <span>Poste 2</span>
                            <div className="input_group">
                                <Icon
                                    icon="eos-icons:role-binding"
                                    className="icon"
                                />
                                <select name="pays" id="pays">
                                    <option value="france">France</option>
                                    <option value="espagne">Espagne</option>
                                </select>
                            </div>
                        </label>

                        <label>
                            <span>Poste 3</span>
                            <div className="input_group">
                                <Icon
                                    icon="eos-icons:role-binding"
                                    className="icon"
                                />
                                <select name="pays" id="pays">
                                    <option value="france">France</option>
                                    <option value="espagne">Espagne</option>
                                </select>
                            </div>
                        </label>

                        <label>
                            <span>Poste 4</span>
                            <div className="input_group">
                                <Icon
                                    icon="eos-icons:role-binding"
                                    className="icon"
                                />
                                <select name="pays" id="pays">
                                    <option value="france">France</option>
                                    <option value="espagne">Espagne</option>
                                </select>
                            </div>
                        </label>
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
