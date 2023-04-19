import candidate_default_image from '../public/images/candidate.jpg';
import styles from '../styles/candidate_card.module.css';
import Modal_Layout from './layouts/modal_layout';

export default function Candidate_Card({ candidate }) {
    return (
        <>
            <div className={styles.candidate_card}>
                {/* <Image
                    src={candidate_default_image}
                    alt=""
                    width={210}
                    height={172}
                    className={styles.candidate_image}
                /> */}
                <img
                    src={
                        candidate.picture
                            ? candidate.picture
                            : `https://gem.ec-nantes.fr/wp-content/uploads/2019/01/profil-vide.png`
                    }
                    className={styles.image}
                    alt={candidate.name}
                />
                <h2>
                    {candidate.first_name} {candidate.name}
                </h2>
                <button
                    type="button"
                    className="button_primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addClientModal"
                    onClick={() =>
                        prompt(
                            'Entrez votre jeton de vote pour confirmer votre choix :'
                        )
                    }
                >
                    Voter
                </button>
            </div>
            <Modal_Layout>
                <h1>Hello</h1>
            </Modal_Layout>
        </>
    );
}
