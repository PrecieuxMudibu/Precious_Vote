/* eslint-disable no-console */
import styles from '../../styles/choose_your_candidate/index.module.css';
import { Candidate_Card } from '../../components';
import Layout from '../../components/layouts/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
    get_an_election,
    get_candidates_for_the_round,
    get_posts_of_election,
    get_rounds_for_a_post,
} from '../../requests';
import { Icon } from '@iconify/react';

export default function Choose_Candidate() {
    const { query } = useRouter();
    const { election_id } = query;
    const [post_index, set_post_index] = useState(0);
    const [candidates, set_candidates] = useState([]);

    const [election, set_election] = useState({});
    async function get_election_info() {
        let response = await get_an_election(election_id);
        console.log('response', response);
        set_election(await get_an_election(election_id));
    }
    useEffect(() => {
        get_election_info();
    }, [election_id]);

    // GET POST OF THE ELECTION
    const [posts, set_posts] = useState([]);
    async function get_posts() {
        set_posts(await get_posts_of_election(election_id));
    }
    useEffect(() => {
        get_posts();
    }, [election_id]);

    // GET ROUNDS OF THE POSTS
    const [rounds, set_rounds] = useState();
    async function get_rounds() {
        const current_post = posts ? posts[post_index] : null;
        set_rounds(await get_rounds_for_a_post(current_post?._id));
    }
    useEffect(() => {
        get_rounds();
        console.log('POST>>>', posts);
        console.log('POSTS INDEX>>>', posts ? posts[post_index] : null);
    }, [posts, post_index]);

    // GET CANDIDATES OF THE ROUNDS
    async function get_candidates() {
        // set_rounds(await get_rounds_for_a_post(current_post?._id));
        console.log('rounds>>> ICICICICICI 2', rounds?.rounds[0]._id);
        let candidates_rounds = await get_candidates_for_the_round(
            rounds?.rounds[0]._id
        );

        const candidates_intermediates_variables = candidates_rounds?.map(
            (item) => item.candidate_id
        );

        console.log(
            'candidates_intermediates_variables>>>',
            candidates_intermediates_variables
        );
        set_candidates(candidates_intermediates_variables);
    }

    useEffect(() => {
        console.log('rounds iiiiic>>>>', rounds);
        get_candidates();
    }, [rounds, posts, post_index]);

    useEffect(() => {
        // get_rounds_for_a_post
        console.log('candidates>>>', candidates);
    }, [candidates]);
    return (
        <Layout>
            <h1>{election?.name}</h1>
            {posts ? <h2>Poste : {posts[post_index]?.name}</h2> : null}

            {post_index != 0 ? (
                <div className={styles.navigate_button}>
                    <Icon
                        icon="ooui:previous-ltr"
                        className="pointer"
                        onClick={() => {
                            set_post_index((post_index) => post_index - 1);
                        }}
                    />
                    Précédent
                </div>
            ) : null}

            {post_index != posts?.length - 1 ? (
                <div
                    className={styles.navigate_button}
                    onClick={() => {
                        set_post_index((post_index) => post_index + 1);
                    }}
                >
                    Suivant
                    <Icon icon="ooui:previous-rtl" className="pointer" />
                </div>
            ) : null}

            <div className={styles.candidates}>
                {candidates?.map((candidate, index) => (
                    <Candidate_Card candidate={candidate} key={index} />
                ))}
            </div>
        </Layout>
    );
}
