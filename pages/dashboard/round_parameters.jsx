import { route_for_create_election } from '../../public/routes';
import axios from 'axios';
import styles from '../../styles/dashboard/round_parameters.module.css';
import {
    Dashboard_Layout,
    Failed_Message,
    Success_Message,
} from '../../components/index';
import { Icon } from '@iconify/react';
import Modal_Layout from '../../components/layouts/modal_layout';
import Image from 'next/image';
import airtel_money from '../../public/images/mobile_money/airtel_money.png';
import m_pesa from '../../public/images/mobile_money/m_pesa.png';
import { applicationContext } from '../_app';
import { useContext, useEffect } from 'react';

export default function Round_Parameters() {
    const { election_to_create, connectedUser, set_election_to_create } =
        useContext(applicationContext);

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
        axios
            .post(route_for_create_election, election_to_create)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log('response>>>', response);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('error--->>>', error);
            });
    }

    useEffect(() => {
        console.log('election_to_create>>>', election_to_create);
    }, [election_to_create]);
    return (
        <Dashboard_Layout page_title="Tours">
            <section>
                <h1>Nouveau projet : Comité G1 Math-Info</h1>
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
                                // value={election_to_create.name}
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
                                // value={election_to_create.name}
                                name="candidates_for_the_second_round"
                                type="number"
                                placeholder="Election du comité de G1 Math-Info"
                            />
                        </div>
                    </label>

                    <label className={styles.two_rounds_or_not_question}>
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
                            >
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                        </div>
                    </label>
                </div>

                <div className={styles.buttons_group}>
                    <button className="button_primary">Précédent</button>
                    <button
                        className="button_primary"
                        onClick={() => create_election()}
                    >
                        Soumettre
                    </button>

                    {/* <button
                        type="button"
                        className="button_primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addClientModal"
                    >
                        Finaliser
                    </button> */}
                </div>

                <Modal_Layout>
                    <h1>Paiement</h1>
                    <p>Vous aller devoir payer 2$</p>

                    <div className={styles.mobile_money_card_container}>
                        <div className={styles.mobile_money_card}>
                            <div className={styles.yyy}>
                                <input
                                    type="radio"
                                    name="age"
                                    value="moins15"
                                    id="moins15"
                                />
                            </div>

                            <div className={styles.yyy}>
                                <Image src={airtel_money} height={125} />
                            </div>
                        </div>
                        <div className={styles.mobile_money_card}>
                            <div className={styles.yyy}>
                                <input
                                    type="radio"
                                    name="age"
                                    value="moins15"
                                    id="moins15"
                                />
                            </div>

                            <div className={styles.yyy}>
                                <Image src={m_pesa} height={125} />
                            </div>
                        </div>
                        <div className={styles.mobile_money_card}>
                            <div className={styles.yyy}>
                                <input
                                    type="radio"
                                    name="age"
                                    value="moins15"
                                    id="moins15"
                                />
                            </div>

                            <div className={styles.yyy}>
                                <Image src={m_pesa} height={125} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.phone_number}>
                        <span>
                            Veuillez renseigner votre numéro de téléphone
                        </span>
                        <div className="input_group">
                            <Icon
                                icon="eos-icons:role-binding"
                                className="icon"
                            />
                            <input name="phone_number" id="phone_number" />
                        </div>
                    </div>
                    <button className="button_primary">Valider</button>
                    <Success_Message />
                    <Failed_Message />
                </Modal_Layout>
            </section>
        </Dashboard_Layout>
    );
}
