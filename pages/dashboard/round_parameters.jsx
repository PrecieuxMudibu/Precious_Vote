import styles from '../../styles/dashboard/round_parameters.module.css';
import { Dashboard_Layout } from '../../components/index';
import { Icon } from '@iconify/react';
import Modal_Layout from '../../components/layouts/modal_layout';
import Image from 'next/image';
import airtel_money from '../../public/images/mobile_money/airtel_money.png';

export default function Round_Parameters() {
    return (
        <Dashboard_Layout page_title="Tours">
            <section>
                <h1>Nouveau projet : Comité G1 Math-Info</h1>
                <h2>Etape 2 : Des élections à plusieurs tours</h2>
                <div>
                    <label className={styles.two_rounds_or_not_question}>
                        Souhaitez-vous des élections à deux tours
                        <div className="input_group">
                            <Icon
                                icon="material-symbols:confirmation-number"
                                className="icon"
                            />
                            <select name="two_rounds" id="two_rounds">
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                        </div>
                    </label>
                    <label className={styles.two_rounds_or_not_question}>
                        Pour qu'un candidat soit élu au premier tour, il doit
                        avoir quel pourcentage au minimum ?
                        <div className="input_group">
                            <Icon
                                icon="material-symbols:confirmation-number"
                                className="icon"
                            />
                            <select name="two_rounds" id="two_rounds">
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                        </div>
                    </label>
                </div>

                <div className={styles.buttons_group}>
                    <button className="button_primary">Précédent</button>
                    <button
                        type="button"
                        className="button_primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addClientModal"
                    >
                        Finaliser
                    </button>
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
                                <Image src={airtel_money} height={125} />
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
                </Modal_Layout>
                {/* <div
                    className="modal fade"
                    id="addClientModal"
                    aria-labelledby="addClientModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="addClientModalLabel"
                                >
                                    Add Client
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <h1>Hello</h1>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </Dashboard_Layout>
    );
}
