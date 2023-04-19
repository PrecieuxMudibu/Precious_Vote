/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
import styles from '../../styles/dashboard/add_candidates.module.css';
import { Item, Dashboard_Layout } from '../../components/index';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { applicationContext } from '../_app';
import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function Add_Candidates() {
    const { election_to_create, set_election_to_create } =
        useContext(applicationContext);

    const [file, set_file] = useState(null);
    const [election_contains_posts, set_election_contains_posts] =
        useState(false);
    const [candidates, set_candidates] = useState([]);

    const { push } = useRouter();

    useEffect(() => {
        if (election_to_create.candidates[0].post != '') {
            set_election_contains_posts(true);
        }
    }, [election_to_create]);

    const inputFile = useRef();

    async function handle_file(e) {
        if (election_contains_posts) {
            const file = e.target.files[0];
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            set_candidates([...jsonData]);

            let electors_verified = [];
            for (let i = 0; i < jsonData.length; i++) {
                let current_elector = jsonData[i];

                if (
                    current_elector.hasOwnProperty('first_name') &&
                    current_elector.hasOwnProperty('name') &&
                    current_elector.hasOwnProperty('email')
                ) {
                    electors_verified.push({
                        first_name: current_elector.first_name,
                        name: current_elector.name,
                        email: current_elector.email,
                    });
                }
            }

            if (electors_verified.length != 0) {
                set_election_to_create({
                    ...election_to_create,
                    electors: electors_verified,
                });
            }
        } else {
            push(`/dashboard/my_projects`);
        }
    }

    function download_template_file() {
        fetch('/electors.xlsx')
            .then((res) => res.blob())
            .then((blob) => {
                set_file(blob);
                saveAs(blob, 'electors_template.xlsx');
            });
    }
    return (
        <Dashboard_Layout page_title="Ajoutez des électeurs">
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
                            <button
                                onClick={() => inputFile.current.click()}
                                className="button_secondary"
                            >
                                Choisir un fichier
                            </button>
                            <input
                                className="hidden"
                                ref={inputFile}
                                type="file"
                                onInput={(e) => handle_file(e)}
                            />
                        </div>
                        <p>
                            <span>
                                Télécharger un fichier exemple en cliquant{' '}
                            </span>
                            <span onClick={() => download_template_file()}>
                                ici
                            </span>
                            .
                        </p>
                    </div>

                    <div className={styles.list_of_candidates}>
                        <div className={styles.thead}>
                            <div>N°</div>
                            <div>Photo</div>
                            <div>Prénom</div>
                            <div>Nom</div>
                        </div>
                        {election_to_create.electors
                            ? election_to_create.electors.map(
                                  (elector, index) => (
                                      <Item
                                          key={index}
                                          number={index}
                                          first_name={elector.first_name}
                                          name={elector.name}
                                      />
                                  )
                              )
                            : null}
                    </div>
                </div>

                <div className={styles.buttons_group}>
                    <Link href="/dashboard/add_candidates">
                        <button className="button_primary">Précédent</button>
                    </Link>
                    <Link href="/dashboard/round_parameters">
                        <button className="button_primary">Suivant</button>
                    </Link>
                </div>
            </section>
        </Dashboard_Layout>
    );
}
