/* eslint-disable no-prototype-builtins */
import { route_for_create_election } from '../../public/routes';
import { useRouter } from 'next/router';
import styles from '../../styles/dashboard/create_election.module.css';
import {
    Button,
    Dashboard_Layout,
    Failed_Message,
    Small_Loader,
    StepperComponent,
    Success_Message,
} from '../../components/index';
import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { applicationContext } from '../_app';
import General_Parameters from './general_parameters';
import Position_To_Be_Filled from './position_to_be_filled';
import Add_Candidates from './add_candidates';
import Add_Electors from './add_electors';
import Round_Parameters from './round_parameters';
import axios from 'axios';
import Modal_Layout from '../../layouts/modal_layout';

export default function Create_Election() {
    const {
        election_to_create,
        set_election_to_create,
        indice_stepper,
        set_indice_stepper,
        token
    } = useContext(applicationContext);

    const [links] = useState([
        {
            label: 'Paramètres généraux',
            icon: (
                <Icon
                    icon="ic:round-settings"
                    className="iconLinks"
                />
            ),
        },
        {
            label: ' Postes à pourvoir',
            icon: (
                <Icon
                    icon="eos-icons:role-binding"
                    className="iconLinks"
                />
            ),
        },
        {
            label: ' Candidats',
            icon: (
                <Icon
                    icon="mdi:podium-first"
                    className="iconLinks"
                />
            ),
        },
        {
            label: ' Electeurs',
            icon: (
                <Icon
                    icon="bi:people-fill"
                    className="iconLinks"
                />
            ),
        },
        {
            label: ' Tours',
            icon: (
                <Icon
                    icon="ic:round-360"
                    className="iconLinks"
                />
            ),
        },
    ]);
    const [response_after_query, set_response_after_query] = useState('');
    const open_modal = () => set_open(true);
    const { push } = useRouter();
    const [open, set_open] = useState(false);
    const dont_close = () => set_open(false);

    function create_election() {
        open_modal();

        if (
            election_to_create.hasOwnProperty('created_by') &&
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
                .post(route_for_create_election, election_to_create, {
                    headers: { Authorization: token },
                })
                .then((response) => {
                    set_response_after_query(response);
                    set_election_to_create({
                        posts: [{ name: '', candidates: [] }],
                        tariff: 'Free',
                        two_rounds: false,
                    });
                    setTimeout(() => push(`/dashboard/my_projects`), 6000);
                })
                .catch((error) => {
                    set_response_after_query({ status: 404 });
                    setTimeout(() => push(`/dashboard/my_projects`), 6000);
                    console.log(error);
                });
        } else {
            set_response_after_query({ status: 404 });
            setTimeout(() => push(`/dashboard/my_projects`), 6000);
        }
    }

    console.log('election_to_create', election_to_create);

    return (
        <>
            <Dashboard_Layout page_title="Paramètres généraux">
                <section className={styles.container}>
                    <div>
                        <StepperComponent
                            links={links}
                            indice={indice_stepper}
                        />
                        {
                            [
                                <General_Parameters
                                    key={0}
                                    election_to_create={election_to_create}
                                    set_election_to_create={
                                        set_election_to_create
                                    }
                                />,
                                <Position_To_Be_Filled
                                    key={1}
                                    election_to_create={election_to_create}
                                    set_election_to_create={
                                        set_election_to_create
                                    }
                                />,
                                <Add_Candidates
                                    key={2}
                                    election_to_create={election_to_create}
                                    set_election_to_create={
                                        set_election_to_create
                                    }
                                />,
                                <Add_Electors
                                    key={3}
                                    election_to_create={election_to_create}
                                    set_election_to_create={
                                        set_election_to_create
                                    }
                                />,
                                <Round_Parameters
                                    key={4}
                                    election_to_create={election_to_create}
                                    set_election_to_create={
                                        set_election_to_create
                                    }
                                />,
                            ][indice_stepper]
                        }
                    </div>
                    <div className={styles.buttons_group}>
                        <div>
                            {indice_stepper > 0 && (
                                <Button
                                    label="Précédent"
                                    onClick={() =>
                                        set_indice_stepper(
                                            (previous_state) =>
                                                previous_state - 1
                                        )
                                    }
                                />
                            )}
                        </div>

                        <div>
                            {indice_stepper === 4 ? (
                                <Button
                                    label="Soumettre"
                                    onClick={() => create_election()}
                                />
                            ) : (
                                <Button
                                    label="Suivant"
                                    onClick={() =>
                                        set_indice_stepper(
                                            (previous_state) =>
                                                previous_state + 1
                                        )
                                    }
                                />
                            )}
                        </div>
                    </div>
                </section>
            </Dashboard_Layout>

            <Modal_Layout open={open} close_modal={dont_close}>
                {response_after_query === '' ? (
                    <div className="center_loader">
                        <Small_Loader />
                    </div>
                ) : response_after_query.status == 201 ? (
                    <Success_Message
                        action="Création de l'élection réussie"
                        message={response_after_query.data.message}
                    />
                ) : (
                    <Failed_Message
                        action="Echec de création de l'élection"
                        message="Quelque chose s'est mal passée. Rassurez-vous d'avoir rempli tous les champs."
                    />
                )}
            </Modal_Layout>
        </>
    );
}
