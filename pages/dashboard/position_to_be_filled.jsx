import styles from '../../styles/dashboard/position_to_be_filled.module.css';
import { Dashboard_Layout } from '../../components/index';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { applicationContext } from '../_app';
import Link from 'next/link';

export default function Position_To_Be_Filled() {
    const { election_to_create, set_election_to_create } =
        useContext(applicationContext);

    function add_a_post() {
        if (election_to_create.candidates.length < 4) {
            let newPost = {
                post: '',
                people: [],
            };

            set_election_to_create((election_to_create) => {
                return {
                    ...election_to_create,
                    candidates: [...election_to_create.candidates, newPost],
                };
            });
        }
    }

    function delete_post(index) {
        let election_to_create_candidates_copy = [
            ...election_to_create.candidates,
        ];
        election_to_create_candidates_copy.splice(index, 1);

        set_election_to_create((election_to_create) => {
            return {
                ...election_to_create,
                candidates: [...election_to_create_candidates_copy],
            };
        });
    }

    function handle_change_post(e, index) {
        let election_to_create_copy = election_to_create;
        election_to_create_copy.candidates[index].post = e.target.value;

        set_election_to_create({ ...election_to_create_copy });
    }

    return (
        <Dashboard_Layout page_title="Poste à pourvoir">
            <section>
                <h1>Nouveau projet : {election_to_create.name}</h1>
                <h2>Etape 2 : Postes à pourvoir</h2>

                <div className={styles.list_of_posts}>
                    {election_to_create.candidates.map((post, index) => (
                        <label key={index}>
                            <span>Poste {index + 1} </span>
                            <span>
                                <Icon
                                    icon="material-symbols:delete-outline-rounded"
                                    className="icon pointer"
                                    onClick={() => delete_post(index)}
                                />
                            </span>
                            <div className="input_group">
                                <Icon
                                    icon="eos-icons:role-binding"
                                    className="icon"
                                />
                                <input
                                    onChange={(e) =>
                                        handle_change_post(e, index)
                                    }
                                    name="name"
                                    type="text"
                                    placeholder="Président"
                                    value={post.post}
                                />
                            </div>
                        </label>
                    ))}
                </div>

                <button onClick={add_a_post} className={styles.add_post_button}>
                    <Icon icon="ic:outline-plus" /> Ajoutez un poste
                </button>

                <div className={styles.buttons_group}>
                    <Link href="/dashboard/general_parameters">
                        <button className="button_primary">Précédent</button>
                    </Link>
                    <Link href="/dashboard/add_candidates">
                        <button className="button_primary">Suivant</button>
                    </Link>
                </div>
            </section>
        </Dashboard_Layout>
    );
}
