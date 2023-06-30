/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
import { saveAs } from 'file-saver';
import { useEffect } from 'react';
import styles from '../../styles/dashboard/add_candidates.module.css';
import { Item } from '../../components/index';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Add_Candidates({
    election_to_create,
    set_election_to_create,
}) {
    const [file, set_file] = useState(null);
    const [election_contains_posts, set_election_contains_posts] =
        useState(false);
    const [candidates, set_candidates] = useState([]);
    const [number_of_post, set_number_of_post] = useState(0);

    const { push } = useRouter();

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

    async function handle_file(e) {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        // set_candidates([...jsonData]);

        let election_to_create_copy = election_to_create;
        election_to_create_copy.posts[number_of_post] = {
            ...election_to_create_copy.posts[number_of_post],
            candidates: jsonData,
        };

        let candidates_verified = [];
        for (
            let i = 0;
            i <
            election_to_create_copy.posts[number_of_post].candidates.length;
            i++
        ) {
            let current_candidate =
                election_to_create_copy.posts[number_of_post].candidates[i];

            if (
                current_candidate.hasOwnProperty('first_name') &&
                current_candidate.hasOwnProperty('name')
            ) {
                candidates_verified.push({
                    first_name: current_candidate.first_name,
                    name: current_candidate.name,
                    picture: current_candidate.picture
                        ? current_candidate.picture
                        : 'https://gem.ec-nantes.fr/wp-content/uploads/2019/01/profil-vide.png',
                });
            }
        }

        election_to_create_copy.posts[number_of_post] = {
            ...election_to_create_copy.posts[number_of_post],
            candidates: candidates_verified,
        };

        set_election_to_create({ ...election_to_create_copy });
    }

    function download_template_file() {
        fetch('/candidates_post_1.xlsx')
            .then((res) => res.blob())
            .then((blob) => {
                set_file(blob);
                saveAs(blob, 'candidates_template.xlsx');
            });
    }

    return (
        <section>
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
                        <span>Télécharger un fichier exemple en cliquant </span>
                        <span
                            className={styles.download_template_file_text}
                            onClick={() => download_template_file()}
                        >
                            ici
                        </span>
                        .
                    </p>
                </div>

                <div className={styles.list_of_candidates}>
                    <div className={styles.thead}>
                        <div>N°</div>
                        <div>
                            <span>Photo</span>
                        </div>
                        <div>Prénom</div>
                        <div>Nom</div>
                    </div>

                    {election_to_create
                        ? election_to_create.posts[
                              number_of_post
                          ].candidates.map((candidate, index) => (
                              <Item
                                  key={index}
                                  number={index}
                                  picture={candidate.picture}
                                  first_name={candidate.first_name}
                                  name={candidate.name}
                              />
                          ))
                        : null}
                </div>
            </div>
        </section>
    );
}
