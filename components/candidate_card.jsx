import { useState } from 'react';
import styles from '../styles/candidate_card.module.css';
import Modal_Layout from '../layouts/modal_layout';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { route_for_vote_candidate } from '../routes';
import Success_Message from './success_message';
import Failed_Message from './failed_message';

export default function Candidate_Card({ candidate, round_id }) {
    const [open, set_open] = useState(false);
    const [token_for_vote, set_token_for_vote] = useState(false);
    const close_modal = () => {
        set_has_user_voted(false);
        set_open(false);
    };
    const open_modal = () => set_open(true);

    const [has_user_voted, set_has_user_voted] = useState(false);

    const [response_after_query, set_response_after_query] = useState({
        data: { message: '' },
    });
    function vote_candidate() {
        const token = localStorage.getItem('vote_app_token');

        let data = {
            token_for_vote: token_for_vote,
            candidate_id: candidate._id,
            round_id,
        };

        // {
        //     "candidate_id": "648f087a6f5035ebe838b1ea",
        //     "token_for_vote": "e5JPX0FSux6TmKobsSwVimjThRjkAlfFdqh79ct5Fjb99H7j8c",
        //     "round_id": "648f087a6f5035ebe838b1e8"

        //   }

        axios
            .post(route_for_vote_candidate, data, {
                headers: { Authorization: token },
            })
            .then((response) => {
                console.log('response', response);
                set_response_after_query(response);
            })
            .catch((error) => {
                set_response_after_query(error);
                console.log('Error-->', error.response);
            });
        set_has_user_voted(true);
        // set_post_number(post_number + 1);
    }

    return (
        <>
            <div className={styles.candidate_card}>
                <img
                    src={
                        candidate?.candidate?.picture
                            ? candidate?.candidate?.picture
                            : `https://gem.ec-nantes.fr/wp-content/uploads/2019/01/profil-vide.png`
                    }
                    className={styles.image}
                    alt={candidate?.name}
                />
                <h2>
                    {candidate?.candidate?.first_name}{' '}
                    {candidate?.candidate?.name}
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
                {!has_user_voted ? (
                    <label className={styles.modal_sub_container}>
                        <div className={styles.candidate_card}>
                            <img
                                src={
                                    candidate?.candidate?.picture
                                        ? candidate?.candidate?.picture
                                        : `https://gem.ec-nantes.fr/wp-content/uploads/2019/01/profil-vide.png`
                                }
                                className={styles.image}
                                alt={candidate?.candidate?.name}
                            />
                            <h2>
                                {candidate?.candidate?.first_name}{' '}
                                {candidate?.candidate?.name}
                            </h2>
                        </div>
                        <span>
                            Entrez votre jeton de vote pour confirmer votre
                            choix, puis cliquer sur "Valider".
                        </span>
                        <div className="input_group">
                            <Icon
                                icon="ic:round-drive-file-rename-outline"
                                className="icon"
                            />
                            <input
                                onChange={(e) =>
                                    set_token_for_vote(e.target.value)
                                }
                                name="name"
                                type="text"
                                placeholder="Election du comité de G1 Math-Info"
                            />
                        </div>
                        <button
                            className="button_primary"
                            onClick={vote_candidate}
                        >
                            Valider
                        </button>
                    </label>
                ) : response_after_query.status == 201 ? (
                    <Success_Message
                        action="Vote enregistré"
                        message={response_after_query.data.message}
                    />
                ) : (
                    <Failed_Message
                        action="Echec du vote"
                        message="Quelque chose s'est mal passé."
                    />
                )}

                {}
            </Modal_Layout>
        </>
    );
}
