import Layout from '../../layouts/layout';
import styles from '../../styles/result_page.module.css';
import { No_Data, Result_Item, Select } from '../../components';
import { useRouter } from 'next/router';
import { get_an_election } from '../../requests';
import { useContext, useEffect, useState } from 'react';
import { applicationContext } from '../_app';

export default function Result_Page() {
    const { fake_token } = useContext(applicationContext);
    const { query } = useRouter();
    const { election_id } = query;
    const [election, set_election] = useState([]);
    const [post_index, set_post_index] = useState(0);
    const [round_index, set_round_index] = useState(0);
    const [show_result, set_show_result] = useState(false);

    useEffect(() => {
        get_an_election(election_id, fake_token)
            .then((response) => {
                set_election(response.data.election);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [query]);
    console.log('election', election);
    useEffect(() => {
        if (election?.two_rounds) {
            if (
                election?.posts[0].rounds[0].status === 'Completed' &&
                election?.posts[0].rounds[1].status === 'Completed'
            ) {
                set_show_result(true);
            }
        }
    }, [election]);

    function change_post(e) {
        const index = election.posts.findIndex(
            (item) => item._id === e.target.value
        );

        set_post_index(index);
    }

    function change_round(e) {
        const index = election.posts[post_index].rounds.findIndex(
            (item) => item._id === e.target.value
        );

        set_round_index(index);
    }

    return (
        <Layout>
            {show_result ? (
                <>
                    <h1>Résultat pour : {election?.name}</h1>

                    <div className={styles.filters}>
                        <Select
                            id="poste"
                            name="poste"
                            label="Poste"
                            icon="material-symbols:confirmation-number"
                            options={election?.posts}
                            onChange={change_post}
                        />

                        <Select
                            id="tours"
                            name="tours"
                            label="Tours"
                            icon="material-symbols:confirmation-number"
                            options={
                                election?.posts &&
                                election?.posts[post_index]?.rounds.map(
                                    (round) => ({
                                        ...round,
                                        name: round?.number,
                                    })
                                )
                            }
                            onChange={change_round}
                        />
                    </div>

                    {/* TODOS: RESULT PAGE RESPONSIVE */}
                    <div className={styles.result}>
                        <div className={styles.thead}>
                            <div>N°</div>
                            <div>Photo</div>
                            <div>Prénom</div>
                            <div>Nom</div>
                            <div>Nombre de voix</div>
                            <div>Pourcentage de voix</div>
                        </div>
                        {election?.posts &&
                            election?.posts[post_index]?.rounds[
                                round_index
                            ]?.candidates?.map((candidate, index) => (
                                <Result_Item
                                    key={index}
                                    index={index}
                                    candidate={candidate}
                                    percentage={(
                                        (candidate.voices * 100) /
                                        election?.electors.length
                                    ).toFixed(2)}
                                />
                            ))}
                    </div>
                </>
            ) : (
                <No_Data label="Vous ne pouvez pas voir les résultats pour l'instant." />
            )}
        </Layout>
    );
}
