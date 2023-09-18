import styles from '../../styles/dashboard/position_to_be_filled.module.css';
import { Icon } from '@iconify/react';
import { Input } from '../../components';

export default function Position_To_Be_Filled({
    election_to_create,
    set_election_to_create,
}) {
    function add_a_post() {
        if (election_to_create.posts.length < 4) {
            let newPost = {
                name: '',
                candidates: [],
            };

            set_election_to_create((election_to_create) => {
                return {
                    ...election_to_create,
                    posts: [...election_to_create.posts, newPost],
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
        election_to_create_copy.posts[index].name = e.target.value;

        set_election_to_create({ ...election_to_create_copy });
    }

    return (
        <>
            <button onClick={add_a_post} className={styles.add_post_button}>
                <Icon icon="ic:outline-plus" /> <span> Ajoutez un poste</span>
            </button>

            <div className={styles.list_of_posts}>
                {election_to_create?.posts?.map((post, index) => (
                    <Input
                        key={index}
                        label={
                            <>
                                <span>Poste {index + 1} </span>
                                <span>
                                    <Icon
                                        icon="material-symbols:delete-outline-rounded"
                                        className={styles.delete_icon}
                                        onClick={() => delete_post(index)}
                                    />
                                </span>
                            </>
                        }
                        icon="eos-icons:role-binding"
                        name="name"
                        type="text"
                        placeholder="Président"
                        value={post.name}
                        onChange={(e) => handle_change_post(e, index)}
                    />
                ))}
            </div>
        </>
    );
}
