/* eslint-disable no-console */
import candidat_image from '../../public/images/test.png';
import { useContext, useEffect } from 'react';
import { applicationContext } from '../_app';
import styles from '../../styles/dashboard/add_candidates.module.css';
import { Item, Dashboard_Layout } from '../../components/index';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import Link from 'next/link';
import { useRef } from 'react';

export default function Add_Candidates() {
    const { election_to_create, set_election_to_create } =
        useContext(applicationContext);

    const [candidats, setCandidats] = useState([]);
    const [number_of_post, set_number_of_post] = useState(0);

    const inputFile = useRef();

    function change_post(action) {
        if (action == 'next') {
            if (number_of_post < election_to_create.candidates.length - 1) {
                set_number_of_post(number_of_post + 1);
            }
        }

        if (action == 'previous') {
            if (number_of_post >= election_to_create.candidates.length - 1) {
                set_number_of_post(number_of_post - 1);
            }
        }
    }

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

        let election_to_create_copy = election_to_create;
        election_to_create_copy.candidates[number_of_post].people = jsonData;

        set_election_to_create({ ...election_to_create_copy });
    }

    useEffect(() => {
        console.log('election_to_create-->', election_to_create);
        console.log(
            'e.people',
            election_to_create.candidates[number_of_post].people
        );
    }, [election_to_create]);

    useEffect(() => {
        console.log('election_to_create>>>', election_to_create);
    }, [election_to_create]);

    return (
        <Dashboard_Layout page_title="Ajoutez des candidats">
            <section>
                <h1>Nouveau projet : {election_to_create.name}</h1>
                <h2>
                    Etape 3 : Rajoutez des candidats “
                    {election_to_create.candidates[number_of_post].post}”
                </h2>

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
                                onInput={(e) => handleFile(e)}
                            />
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

                        {election_to_create.candidates[
                            number_of_post
                        ].people.map((candidate, index) => (
                            <Item
                                key={index}
                                number={index}
                                picture={candidate.image}
                                first_name={candidate.first_name}
                                name={candidate.name}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.buttons_group}>
                    <Link href="/dashboard/position_to_be_filled">
                        <button className="button_primary">Précédent</button>
                    </Link>
                    <div>
                        <Icon
                            icon="ooui:previous-ltr"
                            className="pointer"
                            onClick={() => change_post('previous')}
                        />
                        Poste {number_of_post + 1}
                        <Icon
                            icon="ooui:previous-rtl"
                            className="pointer"
                            onClick={() => change_post('next')}
                        />
                    </div>
                    <Link href="/dashboard/add_electors">
                        <button className="button_primary">Suivant</button>
                    </Link>
                </div>
            </section>
        </Dashboard_Layout>
    );
}
