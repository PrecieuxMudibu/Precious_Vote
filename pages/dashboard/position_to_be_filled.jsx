import Head from 'next/head';
import styles from '../../styles/dashboard/general_parameters.module.css';
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

                    <p>
                        Vous souhaitez organiser des élections pour combien de
                        postes ?
                    </p>

                    <div>
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
                                    <option value="italie">Italie</option>
                                    <option value="royaume-uni">
                                        Royaume-Uni
                                    </option>
                                    <option value="royaume-uni">
                                        Equateur
                                    </option>
                                    <option value="canada">Canada</option>
                                    <option value="etats-unis">
                                        États-Unis
                                    </option>
                                    <option value="chine">Chine</option>
                                    <option value="japon">Japon</option>
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
