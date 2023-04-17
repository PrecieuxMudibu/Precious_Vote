/* eslint-disable no-console */
import candidat_image from '../../public/images/test.png';
import styles from '../../styles/dashboard/add_candidates.module.css';
import { Item, Dashboard_Layout } from '../../components/index';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import * as XLSX from 'xlsx';

export default function Add_Candidates() {
    const [candidats, setCandidats] = useState([]);

    async function handleFile(e) {
        console.log(candidats);

        console.log('reading input file:');
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log(jsonData);
        setCandidats([...jsonData]);
    }

    return (
        <Dashboard_Layout page_title="Ajoutez des candidats">
            <section>
                <h1>Nouveau projet : Comité G1 Math-Info</h1>
                <h2>Etape 3 : Rajoutez des candidats “Chef de promotion”</h2>

                <div className={styles.upload_and_list_section}>
                    <div>
                        <div className={styles.upload_file_section}>
                            <Icon
                                icon="material-symbols:cloud-upload"
                                className={styles.upload_file_icon}
                            />
                            <p>Sélectionner un fichier Excel au format XLSX</p>
                            <button className="button_secondary">
                                Choisir un fichier
                            </button>
                            <input type="file" onInput={(e) => handleFile(e)} />
                        </div>
                        <p>Télécharger un fichier exemple en cliquant ici.</p>
                    </div>

                    <div className={styles.list_of_candidates}>
                        <div className={styles.thead}>
                            <div>N°</div>
                            <div>Photo</div>
                            <div>Prénom</div>
                            <div>Nom</div>
                        </div>

                        <Item
                            number={1}
                            picture={candidat_image}
                            first_name="Belle Grace"
                            name="Tshilanda"
                        />
                        <Item
                            number={1}
                            picture={candidat_image}
                            first_name="Belle Grace"
                            name="Tshilanda"
                        />
                        <Item
                            number={1}
                            picture={candidat_image}
                            first_name="Belle Grace"
                            name="Tshilanda"
                        />
                        <Item
                            number={1}
                            picture={candidat_image}
                            first_name="Belle Grace"
                            name="Tshilanda"
                        />
                        <Item
                            number={1}
                            picture={candidat_image}
                            first_name="Belle Grace"
                            name="Tshilanda"
                        />
                        <Item
                            number={1}
                            picture={candidat_image}
                            first_name="Belle Grace"
                            name="Tshilanda"
                        />
                    </div>
                </div>
                {/* <div className={styles.list_of_posts}></div> */}

                <div className={styles.buttons_group}>
                    <button className="button_primary">Précédent</button>
                    <button className="button_primary">Suivant</button>
                </div>
            </section>
        </Dashboard_Layout>
    );
}
