import { useEffect, useState } from 'react';
import candidate_default_image from '../public/images/candidate.jpg';
import styles from '../styles/candidate_card.module.css';
import Modal_Layout from './layouts/modal_layout';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { route_for_vote_candidate } from '../public/routes';

export default function Candidate_Card({
    candidate,
    post_number,
    set_post_number,
}) {
    const [open, set_open] = useState(false);
    const [token_for_vote, set_token_for_vote] = useState(false);
    const close_modal = () => set_open(false);
    const open_modal = () => set_open(true);

    function vote_candidate() {
        let data = {
            token_for_vote: token_for_vote,
            candidate_id: candidate._id,
        };

        axios
            .post(route_for_vote_candidate, data)
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('Error Login --->', error);
            });

        // set_post_number(post_number + 1);
    }

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
                    onClick={() => open_modal()}
                >
                    Voter
                </button>
            </div>

            <Modal_Layout open={open} close_modal={close_modal}>
                <label>
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
                    </div>
                    <span>
                        Entrez votre jeton de vote pour confirmer votre choix,
                        puis cliquer sur "Valider".
                    </span>
                    <div className="input_group">
                        <Icon
                            icon="ic:round-drive-file-rename-outline"
                            className="icon"
                        />
                        <input
                            onChange={(e) => set_token_for_vote(e.target.value)}
                            name="name"
                            type="text"
                            placeholder="Election du comité de G1 Math-Info"
                        />
                    </div>
                </label>

                <button className="button_primary" onClick={vote_candidate}>
                    Valider
                </button>
            </Modal_Layout>
        </>
    );
}
