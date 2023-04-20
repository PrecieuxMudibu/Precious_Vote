import { useEffect } from 'react';
import candidate_default_image from '../public/images/candidate.jpg';
import styles from '../styles/candidate_card.module.css';
import Modal_Layout from './layouts/modal_layout';

export default function Candidate_Card({
    candidate,
    post_number,
    set_post_number,
}) {
    function show_modal() {
        const token_for_vote = prompt(
            'Entrez votre jeton de vote pour confirmer votre choix :'
        );

        // VOTE
        // PUIs redirige

        set_post_number(post_number + 1);
        // console.log('token_for_vote>>>', token_for_vote);
    }

    useEffect(() => {
        console.log(post_number);
    }, [post_number]);

    return (
        <>
            <div className={styles.candidate_card}>
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
                    onClick={() => show_modal()}
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
