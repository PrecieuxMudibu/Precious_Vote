import { Icon } from '@iconify/react';
import Layout from '../../components/layouts/layout';
import styles from '../../styles/result_page.module.css';
import { Result_Item } from '../../components';
import { useRouter } from 'next/router';
import {
    get_an_election,
    get_electors,
    get_posts_of_election,
    get_rounds_for_a_post,
} from '../../requests';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { route_for_get_candidates_for_the_round } from '../../public/routes';

export default function Result_Page() {
    const { query } = useRouter();
    const { election_id } = query;

    const [current_post_selected, set_current_post_selected] = useState([]);
    const [round_selected, set_round_selected] = useState({});
    const [rounds_of_the_post_selected, set_rounds_of_the_post_selected] =
        useState([]);
    const [current_election, set_current_election] = useState({});
    const [candidates, set_candidates] = useState([]);
    const [election_post_and_rounds, set_election_post_and_rounds] = useState(
        []
    );
    const [electors, set_electors] = useState([]);
    async function get_electors_of_election() {
        set_electors(await get_electors(election_id));
    }

    async function get_candidates_for_the_round(id) {
        return await axios
            .get(`${route_for_get_candidates_for_the_round}/${id}`)
            .then((response) => response.data.candidates)
            .catch((error) => {
                console.log(error);
            });
    }

    async function get_candidates() {
        const posts = await get_posts_of_election(election_id);

        // GET THE ROUNDS FOR ALL POST
        let post_and_rounds = [];
        for (let i = 0; i < posts?.length; i++) {
            const rounds = await get_rounds_for_a_post(posts[i]._id);
            post_and_rounds.push({
                post: posts[i],
                ...rounds,
            });
        }

        set_election_post_and_rounds(post_and_rounds);
        if (round_selected != undefined) {
            const candidates_for_the_round = await get_candidates_for_the_round(
                round_selected._id
            );
            set_candidates(
                candidates_for_the_round?.map((item) => {
                    return {
                        ...item.candidate_id,
                        voices: item.voices,
                    };
                })
            );
        }

        set_current_election(await get_an_election(election_id));
    }

    useEffect(() => {
        const found = election_post_and_rounds.find(
            (element) => element.post.name == current_post_selected
        );
        set_rounds_of_the_post_selected(found?.rounds);
    }, [election_post_and_rounds, current_post_selected]);

    useEffect(() => {
        get_electors_of_election();
        get_candidates();
    }, [election_id, round_selected]);

    return (
        <Layout>
            <h1>Résultat pour : {current_election?.name}</h1>

            <div className={styles.filters}>
                <label className={styles.filter}>
                    <span>Poste</span>
                    <div className="input_group">
                        <Icon
                            icon="material-symbols:confirmation-number"
                            className="icon"
                        />

                        <select
                            onChange={(e) =>
                                set_current_post_selected(e.target.value)
                            }
                            name="poste"
                            id="poste"
                        >
                            <option value=""></option>
                            {election_post_and_rounds.map((item, index) => {
                                return (
                                    <option key={index} value={item.post.name}>
                                        {item.post.name}{' '}
                                    </option>
                                );
                            })}{' '}
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
                        <select
                            value={round_selected?.number}
                            onChange={(e) =>
                                set_round_selected(
                                    rounds_of_the_post_selected.find(
                                        (element) =>
                                            element.number == e.target.value
                                    )
                                )
                            }
                            name="rounds"
                            id="rounds"
                        >
                            <option value=""></option>
                            {rounds_of_the_post_selected?.map((item, index) => {
                                return (
                                    <option key={index} value={item.number}>
                                        {' '}
                                        {item.number}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </label>
            </div>

            {/* TO DO RESULT PAGE RESPONSIVE */}
            <div className={styles.result}>
                <div className={styles.thead}>
                    <div>N°</div>
                    <div>Photo</div>
                    <div>Prénom</div>
                    <div>Nom</div>
                    <div>Nombre de voix</div>
                    <div>Pourcentage de voix</div>
                </div>
                {candidates?.map((candidate, index) => (
                    <Result_Item
                        key={index}
                        index={index}
                        candidate={candidate}
                        percentage={(
                            (candidate.voices * 100) /
                            electors.length
                        ).toFixed(2)}
                    />
                ))}
            </div>
        </Layout>
    );
}
