import styles from '../../styles/choose_your_candidate/index.module.css';
import { Candidate_Card } from '../../components';
import Layout from '../../components/layouts/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
    get_an_election,
    get_posts_of_election,
    get_rounds_for_a_post,
} from '../../requests';
import { route_for_get_candidates_for_the_round } from '../../public/routes';
import axios from 'axios';

export default function Choose_Candidate() {
    const { query } = useRouter();
    const { election_id } = query;
    const [post_number, set_post_number] = useState(0);
    const [current_election, set_current_election] = useState({});
    const [candidates, set_candidates] = useState([]);
    const [election_post_and_rounds, set_election_post_and_rounds] = useState(
        []
    );

    useEffect(() => {
        console.log('candidates Z>>>', candidates);
        console.log('current_election Z>>>', current_election);
        console.log('election_post_and_rounds Z>>>', election_post_and_rounds);
    }, [candidates, current_election]);

    async function get_candidates_for_the_round(id) {
        return await axios
            .get(`${route_for_get_candidates_for_the_round}/${id}`)
            .then((response) => response.data.candidates)
            .catch((error) => {
                console.log('error--->>>', error);
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

        // GET A CANDIDATES FOR THE FIRST POST
        set_candidates(
            await get_candidates_for_the_round(
                post_and_rounds[post_number]?.rounds[0]._id
            )
        );
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

        // GET A CANDIDATES FOR THE FIRST POST
        set_candidates(
            await get_candidates_for_the_round(
                post_and_rounds[post_number]?.rounds[0]._id
            )
        );

        set_current_election(await get_an_election(election_id));
    }

    useEffect(() => {
        get_candidates();
    }, [election_id, post_number]);
    return (
        <Layout>
            <h1>{current_election.name}</h1>
            <h2>Poste : {election_post_and_rounds[post_number]?.post.name}</h2>
            <div className={styles.candidates}>
                {candidates?.map((candidate, index) => (
                    <Candidate_Card
                        candidate={candidate.candidate_id}
                        post_number={post_number}
                        set_post_number={set_post_number}
                        key={index}
                    />
                ))}
            </div>
        </Layout>
    );
}
