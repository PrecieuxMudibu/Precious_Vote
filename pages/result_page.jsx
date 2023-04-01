import { Icon } from '@iconify/react';
import Layout from '../components/layouts/layout';
import styles from '../styles/result_page.module.css';
import { Result_Item } from '../components';
import photo from '../public/images/candidate.jpg';

export default function Result_Page() {
    return (
        <Layout>
            <h1>Résultat pour l’élection : Comité de G1 Math-Info UPN</h1>

            <div className={styles.filters}>
                <label className={styles.filter}>
                    <span>Candidat</span>
                    <div className="input_group">
                        <Icon
                            icon="material-symbols:confirmation-number"
                            className="icon"
                        />
                        <select name="pays" id="pays">
                            <option value="france">1</option>
                            <option value="espagne">2</option>
                            <option value="espagne">3</option>
                        </select>
                    </div>
                </label>
                <label className={styles.filter}>
                    <span>Poste</span>
                    <div className="input_group">
                        <Icon
                            icon="material-symbols:confirmation-number"
                            className="icon"
                        />
                        <select name="pays" id="pays">
                            <option value="france">1</option>
                            <option value="espagne">2</option>
                            <option value="espagne">3</option>
                        </select>
                    </div>
                </label>
                <label className={styles.filter}>
                    <span>Tours</span>
                    <div className="input_group">
                        <Icon
                            icon="material-symbols:confirmation-number"
                            className="icon"
                        />
                        <select name="pays" id="pays">
                            <option value="france">1</option>
                            <option value="espagne">2</option>
                            <option value="espagne">3</option>
                        </select>
                    </div>
                </label>
            </div>

            <div className={styles.result}>
                <div className={styles.thead}>
                    <div>N°</div>
                    <div>Photo</div>
                    <div>Prénom</div>
                    <div>Nom</div>
                    <div>Nombre de voix</div>
                    <div>Pourcentage de voix</div>
                </div>
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
                <Result_Item
                    number={1}
                    picture={photo}
                    first_name="Précieux"
                    name="Mudibu"
                    number_of_voice={34}
                    percentage_of_voice="34%"
                />
            </div>
        </Layout>
    );
}
