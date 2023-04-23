/* eslint-disable no-prototype-builtins */
import { route_for_create_election } from '../../public/routes';
import axios from 'axios';
import styles from '../../styles/dashboard/round_parameters.module.css';
import {
    Dashboard_Layout,
    Failed_Message,
    Success_Message,
    Small_Loader,
} from '../../components/index';
import { Icon } from '@iconify/react';
import Modal_Layout from '../../components/layouts/modal_layout';
import { applicationContext } from '../_app';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Round_Parameters() {
    const { election_to_create, connectedUser, set_election_to_create } =
        useContext(applicationContext);

    const [open, set_open] = useState(false);
    const [response_after_query, set_response_after_query] = useState('');
    const close_modal = () => set_open(false);
    const open_modal = () => set_open(true);
    const { push } = useRouter();
    const [show_loader, set_show_loader] = useState(false);

    function onChange(e) {
        const { name, value } = e.target;

        if (name == 'first_round_eligibility_criteria')
            set_election_to_create({
                ...election_to_create,
                user_id: connectedUser._id,
                [name]: parseInt(value),
            });

        if (name == 'candidates_for_the_second_round')
            set_election_to_create({
                ...election_to_create,
                user_id: connectedUser._id,
                [name]: parseInt(value),
            });

        if (name == 'two_rounds')
            set_election_to_create({
                ...election_to_create,
                [name]: value == 'Oui' ? true : false,
            });
    }

    function create_election() {
        set_show_loader(true);
        if (
            election_to_create.hasOwnProperty('user_id') &&
            election_to_create.hasOwnProperty('name') &&
            election_to_create.hasOwnProperty('tariff') &&
            election_to_create.hasOwnProperty('electors') &&
            election_to_create.hasOwnProperty(
                'first_round_eligibility_criteria'
            ) &&
            election_to_create.hasOwnProperty('description') &&
            election_to_create.hasOwnProperty(
                'candidates_for_the_second_round'
            ) &&
            election_to_create.hasOwnProperty('two_rounds')
        ) {
            axios
                .post(route_for_create_election, election_to_create)
                .then((response) => {
                    set_response_after_query(response);
                    open_modal();
                    set_election_to_create({
                        candidates: [{ post: '', people: [] }],
                        tariff: 'Free',
                        two_rounds: false,
                    });
                    setTimeout(() => push(`/dashboard/my_projects`), 6000);
                })
                .catch((error) => {
                    console.log('error--->>>', error);
                });
        } else {
            set_response_after_query({ status: 404 });
            open_modal();
        }
        set_show_loader(false);
    }

    return (
        <Dashboard_Layout page_title="Tours">
            <section>
                <h1>Nouveau projet : {election_to_create.name}</h1>
                <h2>Etape 2 : Des élections à plusieurs tours</h2>
                <div>
                    <label>
                        <span>
                            Pour qu'un candidat soit élu au premier tour, il
                            doit avoir quel pourcentage au minimum ?
                        </span>
                        <div className="input_group">
                            <Icon
                                icon="ic:round-drive-file-rename-outline"
                                className="icon"
                            />
                            <input
                                onChange={onChange}
                                value={
                                    election_to_create.first_round_eligibility_criteria
                                }
                                name="first_round_eligibility_criteria"
                                type="number"
                                placeholder="Election du comité de G1 Math-Info"
                            />
                        </div>
                    </label>

                    <label>
                        <span>
                            Combien de candidat souhaiteriez-vous en cas de
                            deuxième tour ?
                        </span>
                        <div className="input_group">
                            <Icon
                                icon="ic:round-drive-file-rename-outline"
                                className="icon"
                            />
                            <input
                                onChange={onChange}
                                value={
                                    election_to_create.candidates_for_the_second_round
                                }
                                name="candidates_for_the_second_round"
                                type="number"
                                placeholder="Election du comité de G1 Math-Info"
                            />
                        </div>
                    </label>

                    {/* <label className={styles.two_rounds_or_not_question}>
                        Souhaitez-vous des élections à deux tours
                        <div className="input_group">
                            <Icon
                                icon="material-symbols:confirmation-number"
                                className="icon"
                            />
                            <select
                                onChange={onChange}
                                name="two_rounds"
                                id="two_rounds"
                                value={
                                    election_to_create.two_rounds
                                        ? 'Oui'
                                        : 'Non'
                                }
                            >
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                        </div>
                    </label> */}
                </div>

                <div className={styles.buttons_group}>
                    <Link href="/dashboard/add_electors" className="link">
                        <button className="button_primary">Précédent</button>
                    </Link>

                    {show_loader ? (
                        <button className="button_primary">
                            <Small_Loader color="white" />
                        </button>
                    ) : (
                        <button
                            className="button_primary"
                            onClick={() => create_election()}
                        >
                            Soumettre
                        </button>
                    )}
                </div>

                <Modal_Layout open={open} close_modal={close_modal}>
                    {response_after_query.status == 201 ? (
                        <Success_Message
                            action="Création de l'élection réussie"
                            message={response_after_query.data.message}
                        />
                    ) : (
                        <Failed_Message
                            action="Echec dans la création de l'élection"
                            message="Quelque chose s'est mal passé. Soyez sûr d'avoir rempli tous les champs."
                        />
                    )}
                </Modal_Layout>
            </section>
        </Dashboard_Layout>
    );
}
