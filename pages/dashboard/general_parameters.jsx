import styles from '../../styles/dashboard/general_parameters.module.css';
import {
    Button,
    Dashboard_Layout,
    StepperComponent,
} from '../../components/index';
import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { applicationContext } from '../_app';
import Link from 'next/link';

export default function General_Parameters() {
    const { election_to_create, set_election_to_create } =
        useContext(applicationContext);
    const [indice, setIndice] = useState(0);

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

    function onChange(e) {
        const { name, value } = e.target;
        set_election_to_create({ ...election_to_create, [name]: value });
    }

    return (
        <Dashboard_Layout page_title="Paramètres généraux">
            <section>
                <h1>Nouveau projet : {election_to_create.name}</h1>
                <h2>Etape 1 : Paramètres généraux</h2>

                <StepperComponent
                    links={links}
                    indice={indice}
                    setIndice={setIndice}
                />

                <div className={styles}>
                    <div className={styles.left_bloc}>
                        <label>
                            <span>Nom de votre élection</span>
                            <div className="input_group">
                                <Icon
                                    icon="ic:round-drive-file-rename-outline"
                                    className="icon"
                                />
                                <input
                                    onChange={onChange}
                                    value={election_to_create.name}
                                    name="name"
                                    type="text"
                                    placeholder="Election du comité de G1 Math-Info"
                                />
                            </div>
                        </label>

                        <label>
                            <span>Description</span>
                            <div className="input_group">
                                <Icon
                                    icon="fluent:text-description-24-filled"
                                    className="icon"
                                />
                                <textarea
                                    value={election_to_create.description}
                                    onChange={onChange}
                                    name="description"
                                ></textarea>
                            </div>
                        </label>
                    </div>

                    {/* <div>
                        <label>
                            <span>Candidat pour le second round</span>
                            <div className="input_group">
                                <Icon
                                    icon="material-symbols:calendar-month"
                                    className="icon"
                                />
                                <input
                                    type="email"
                                    placeholder="placide@gmail.com"
                                />
                            </div>
                        </label>

                        <label>
                            <span>Fin</span>
                            <div className="input_group">
                                <Icon
                                    icon="material-symbols:calendar-month"
                                    className="icon"
                                />
                                <input
                                    type="email"
                                    placeholder="placide@gmail.com"
                                />
                            </div>
                        </label>
                    </div> */}
                </div>

                <div className={styles.buttons_group}>
                    <Link
                        href="/dashboard/position_to_be_filled"
                        className="link"
                    >
                        <Button label="Suivant" />
                    </Link>
                </div>
            </section>
        </Dashboard_Layout>
    );
}
