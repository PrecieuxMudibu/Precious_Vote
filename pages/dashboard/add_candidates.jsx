import candidat_image from '../../public/images/test.png';
import Head from 'next/head';
import styles from '../../styles/dashboard/add_candidates.module.css';
import { Left_Section } from '../../components/index';

import { Icon } from '@iconify/react';
import Item from '../../components/item';

export default function Add_Candidates() {
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
                    <h2>
                        Etape 3 : Rajoutez des candidats “Chef de promotion”
                    </h2>

                    <div className="flex">
                        <div>
                            <div className={styles.upload_file_section}>
                                <Icon
                                    icon="material-symbols:cloud-upload"
                                    className={styles.upload_file_icon}
                                />
                                <p>
                                    Sélectionner un fichier Excel au format XLSX
                                </p>
                                <button className="button_secondary">
                                    Choisir un fichier
                                </button>
                            </div>
                            <p>
                                Télécharger un fichier exemple en cliquant ici.
                            </p>
                        </div>

                        <div className={styles.list_of_candidates}>
                            <div className={styles.thead}>
                                <div>N°</div>
                                <div>Photo</div>
                                <div>Prénom</div>
                                <div>Nom</div>
                            </div>

                            <Item number={1} picture={candidat_image} first_name="Belle Grace" name="Tshilanda"/>
                            <Item number={1} picture={candidat_image} first_name="Belle Grace" name="Tshilanda"/>
                            <Item number={1} picture={candidat_image} first_name="Belle Grace" name="Tshilanda"/>
                            <Item number={1} picture={candidat_image} first_name="Belle Grace" name="Tshilanda"/>
                            <Item number={1} picture={candidat_image} first_name="Belle Grace" name="Tshilanda"/>
                            <Item number={1} picture={candidat_image} first_name="Belle Grace" name="Tshilanda"/>
                            <Item number={1} picture={candidat_image} first_name="Belle Grace" name="Tshilanda"/>
                        </div>
                    </div>
                    {/* <div className={styles.list_of_posts}></div> */}

                    <div className={styles.buttons_group}>
                        <button className="button_primary">Précédent</button>
                        <button className="button_primary">Suivant</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
