import styles from '../../styles/dashboard/general_parameters.module.css';
import { Dashboard_Layout } from '../../components/index';
import { Icon } from '@iconify/react';

export default function General_Parameters() {
    return (
        <Dashboard_Layout page_title="Paramètres généraux">
            <section>
                <h1>Nouveau projet : Comité G1 Math-Info</h1>
                <h2>Paramètres généraux</h2>

                <div className={styles.columns}>
                    <div>
                        <label>
                            <span>Nom de votre élection</span>
                            <div className="input_group">
                                <Icon
                                    icon="ic:round-drive-file-rename-outline"
                                    className="icon"
                                />
                                <input
                                    type="text"
                                    placeholder="placide@gmail.com"
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
                                <textarea name="description"></textarea>
                            </div>
                        </label>
                    </div>

                    <div>
                        <label>
                            <span>Début</span>
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
                    </div>
                </div>

                <div className={styles.buttons_group}>
                    <button className="button_primary">Précédent</button>
                    <button className="button_primary">Suivant</button>
                </div>
            </section>
        </Dashboard_Layout>
    );
}
