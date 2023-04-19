/* eslint-disable no-console */
import logo from '../public/images/test.png';
import Image from 'next/image';
import styles from '../styles/election_card.module.css';
import {
    route_for_get_posts_for_an_election,
    route_for_get_rounds_for_a_post,
    route_for_start_round,
} from '../public/routes';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Election_Card({ election }) {
    const [election_posts_and_rounds, set_election_posts_and_rounds] = useState(
        []
    );

    async function get_posts_of_election(id) {
        return await axios
            .get(`${route_for_get_posts_for_an_election}/${id}`)
            .then((response) => response.data.posts)
            .catch((error) => {
                console.log('error--->>>', error);
            });
    }

    async function get_rounds_for_a_post(id) {
        return await axios
            .get(`${route_for_get_rounds_for_a_post}/${id}`)
            .then((response) => response.data)
            .catch((error) => {
                console.log('error--->>>', error);
            });
    }
    async function start_a_round(id) {
        return await axios
            .put(`${route_for_start_round}/${id}`)
            .then((response) => response.data)
            .catch((error) => {
                console.log('error--response->>>', error);
            });
    }

    async function begin_round() {
        let post_and_rounds = [];
        const posts = await get_posts_of_election(election._id);

        // GET THE POST FOR ALL ROUNDS
        for (let i = 0; i < posts.length; i++) {
            const rounds = await get_rounds_for_a_post(posts[0]._id);
            post_and_rounds.push({
                post: posts[i],
                ...rounds,
            });
        }

        // START ALL FIRST ROUNDS
        for (let i = 0; i < post_and_rounds.length; i++) {
            const round_id = post_and_rounds[i].rounds[0]._id;
            let response = await start_a_round(round_id);
            console.log('response>>>', response);

            // console.log('response>>>', response_1);
            // if (post_and_rounds[i].rounds[1] != undefined) {
            //     // alert('hello');
            //     let response= start_a_round(
            //         post_and_rounds[i].rounds[0]._id
            //     );
            // }
        }
    }

    useEffect(() => {
        console.log(
            'election_posts_and_rounds ICI>>>',
            election_posts_and_rounds
        );
    }, [election_posts_and_rounds]);

    return (
        <div className={styles.election_card}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={85}
                height={88}
                className={styles.election_card__image}
            />

            <div className={styles.election_card__details}>
                <h2 className={styles.election_card__name}>{election.name}</h2>
                <div className={styles.election_card__date}>
                    <button
                        className="button_primary"
                        onClick={() => begin_round()}
                    >
                        Commencer
                    </button>
                    {/* <p>Début : 19/11/2023</p>
                    <p>Fin : 20/11/2023</p> */}
                </div>
            </div>

            <div className={styles.election_status}></div>
        </div>
    );
}
