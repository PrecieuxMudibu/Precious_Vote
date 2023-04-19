import styles from '../../styles/choose_your_candidate/index.module.css';
import { Candidate_Card } from '../../components';
import Layout from '../../components/layouts/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { get_posts_of_election, get_rounds_for_a_post } from '../../requests';
import { route_for_get_candidates_for_the_round } from '../../public/routes';
import axios from 'axios';

export default function Choose_Candidate() {
    const { query } = useRouter();
    const { election_id } = query;
    const [post_number, set_post_number] = useState(0);
    const [candidates, set_candidates] = useState([]);

    useEffect(() => {
        console.log('candidates Z>>>', candidates);
    }, [candidates]);

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
        console.log('posts>>>>', posts);

        // GET THE ROUNDS FOR ALL POST
        let post_and_rounds = [];
        for (let i = 0; i < posts?.length; i++) {
            const rounds = await get_rounds_for_a_post(posts[i]._id);
            post_and_rounds.push({
                post: posts[i],
                ...rounds,
            });
        }

        // GET A CANDIDATES FOR THE FIRST POST
        set_candidates(
            await get_candidates_for_the_round(
                post_and_rounds[post_number]?.rounds[0]._id
            )
        );
    }

    useEffect(() => {
        get_candidates();
    }, [election_id]);
    return (
        <Layout>
            <h1>Election : Comité de G1 Math-Info UPN</h1>
            <h2>Poste : CP</h2>
            <div className={styles.candidates}>
                {candidates?.map((candidate, index) => (
                    <Candidate_Card
                        candidate={candidate.candidate_id}
                        key={index}
                    />
                ))}
            </div>
        </Layout>
    );
}
