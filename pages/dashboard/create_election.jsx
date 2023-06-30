import styles from '../../styles/dashboard/create_election.module.css';
import {
    Button,
    Dashboard_Layout,
    StepperComponent,
} from '../../components/index';
import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { applicationContext } from '../_app';
import General_Parameters from './general_parameters';
import Position_To_Be_Filled from './position_to_be_filled';
import Add_Candidates from './add_candidates';
import Add_Electors from './add_electors';

export default function Create_Election() {
    const {
        election_to_create,
        set_election_to_create,
        indice_stepper,
        set_indice_stepper,
    } = useContext(applicationContext);

    const [links] = useState([
        {
            label: 'Paramètres généraux',
            icon: (
                <Icon
                    icon="ic:round-drive-file-rename-outline"
                    className="icon"
                />
            ),
        },
        {
            label: ' Postes à pourvoir',
            icon: (
                <Icon
                    icon="ic:round-drive-file-rename-outline"
                    className="icon"
                />
            ),
        },
        {
            label: ' Candidats',
            icon: (
                <Icon
                    icon="ic:round-drive-file-rename-outline"
                    className="icon"
                />
            ),
        },
        {
            label: ' Electeurs',
            icon: (
                <Icon
                    icon="ic:round-drive-file-rename-outline"
                    className="icon"
                />
            ),
        },
        {
            label: ' Tours',
            icon: (
                <Icon
                    icon="ic:round-drive-file-rename-outline"
                    className="icon"
                />
            ),
        },
    ]);

    return (
        <Dashboard_Layout page_title="Paramètres généraux">
            <section>
                {/* <h1>Nouveau projet : {election_to_create.name}</h1> */}
                <StepperComponent links={links} indice={indice_stepper} />
                {
                    [
                        <General_Parameters
                            key={0}
                            election_to_create={election_to_create}
                            set_election_to_create={set_election_to_create}
                        />,
                        <Position_To_Be_Filled
                            key={1}
                            election_to_create={election_to_create}
                            set_election_to_create={set_election_to_create}
                        />,
                        <Add_Candidates
                            key={2}
                            election_to_create={election_to_create}
                            set_election_to_create={set_election_to_create}
                        />,
                        <Add_Electors
                            key={3}
                            election_to_create={election_to_create}
                            set_election_to_create={set_election_to_create}
                        />,
                        <p key={2}>Hello</p>,
                    ][indice_stepper]
                }
                <div className={styles.buttons_group}>
                    <div>
                        {indice_stepper > 0 && (
                            <Button
                                label="Précédent"
                                onClick={() =>
                                    set_indice_stepper(
                                        (previous_state) => previous_state - 1
                                    )
                                }
                            />
                        )}
                    </div>

                    <div>
                        {indice_stepper !== 4 && (
                            <Button
                                label="Suivant"
                                onClick={() =>
                                    set_indice_stepper(
                                        (previous_state) => previous_state + 1
                                    )
                                }
                            />
                        )}
                    </div>
                </div>
            </section>
        </Dashboard_Layout>
    );
}
