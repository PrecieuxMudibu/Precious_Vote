import Image from 'next/image';
import candidate from '../public/images/candidate.jpg';
import styles from '../styles/candidate_card.module.css';
import Modal_Layout from './layouts/modal_layout';

export default function Candidate_Card() {
    return (
        <>
            <div className={styles.candidate_card}>
                <Image
                    src={candidate}
                    alt=""
                    width={210}
                    height={172}
                    className={styles.candidate_image}
                />
                <h2>Belle Grâce Tshilanda</h2>
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
