/* eslint-disable no-console */
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
import { Icon } from '@iconify/react';

export default function Choose_Candidate() {
    const { query } = useRouter();
    const { election_id } = query;
    const [post_index, set_post_index] = useState(0);
    const [election, set_election] = useState({});
    const [candidates, set_candidates] = useState([]);

    const [posts, set_posts] = useState([]);
    async function get_posts() {
        set_posts(await get_posts_of_election(election_id));
    }
    useEffect(() => {
        get_posts();
    }, [election_id]);

    const [rounds, set_rounds] = useState();
    async function get_rounds() {
        const current_post = posts ? posts[post_index] : null;
        set_rounds(await get_rounds_for_a_post(current_post?._id));
    }
    useEffect(() => {
        // get_rounds_for_a_post
        get_rounds();
        console.log('POST>>>', posts);
        console.log('POSTS INDEX>>>', posts ? posts[post_index] : null);
    }, [posts, post_index]);

    useEffect(() => {
        // get_rounds_for_a_post
        console.log('ROUNDS>>>', rounds);
    }, [rounds]);
    return (
        <Layout>
            <h1>{election?.name}</h1>
            {posts ? <h2>Poste : {posts[post_index]?.name}</h2> : null}

            {post_index != 0 ? (
                <Icon
                    icon="ooui:previous-ltr"
                    className="pointer"
                    onClick={() => {
                        set_post_index((post_index) => post_index - 1);
                    }}
                />
            ) : null}

            {post_index != posts?.length - 1 ? (
                <Icon
                    icon="ooui:previous-rtl"
                    className="pointer"
                    onClick={() => {
                        set_post_index((post_index) => post_index + 1);
                    }}
                />
            ) : null}

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

/* eslint-disable no-console */
// import styles from '../../styles/choose_your_candidate/index.module.css';
// import { Candidate_Card } from '../../components';
// import Layout from '../../components/layouts/layout';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import {
//     get_an_election,
//     get_posts_of_election,
//     get_rounds_for_a_post,
// } from '../../requests';
// import { route_for_get_candidates_for_the_round } from '../../public/routes';
// import axios from 'axios';
// import { Icon } from '@iconify/react';

// export default function Choose_Candidate() {
//     const { query } = useRouter();
//     const { election_id } = query;
//     const [post_number, set_post_number] = useState(0);
//     const [current_election, set_current_election] = useState({});
//     const [candidates, set_candidates] = useState([]);
//     const [election_post_and_rounds, set_election_post_and_rounds] = useState(
//         []
//     );

//     const [posts, set_posts] = useState([]);

//     async function get_candidates_for_the_round(id) {
//         return await axios
//             .get(`${route_for_get_candidates_for_the_round}/${id}`)
//             .then((response) => response.data.candidates)
//             .catch((error) => {
//                 console.log('error--->>>', error);
//             });
//     }

//     async function get_candidates() {
//         const posts = await get_posts_of_election(election_id);

//         // GET THE ROUNDS FOR ALL POST
//         let post_and_rounds = [];
//         for (let i = 0; i < posts?.length; i++) {
//             const rounds = await get_rounds_for_a_post(posts[i]._id);
//             post_and_rounds.push({
//                 post: posts[i],
//                 ...rounds,
//             });
//         }

//         set_election_post_and_rounds(post_and_rounds);

//         // GET A CANDIDATES FOR THE FIRST POST
//         set_candidates(
//             await get_candidates_for_the_round(
//                 post_and_rounds[post_number]?.rounds[0]._id
//             )
//         );

//         set_current_election(await get_an_election(election_id));
//     }

//     useEffect(() => {
//         get_candidates();
//     }, [election_id, post_number]);
//     return (
//         <Layout>
//             <h1>{current_election?.name}</h1>
//             <h2>Poste : {election_post_and_rounds[post_number]?.post.name}</h2>
//             <Icon
//                 icon="ooui:previous-ltr"
//                 className="pointer"
//                 // onClick={() => change_post('previous')}
//             />
//             {/* Poste {number_of_post + 1} */}
//             <Icon
//                 icon="ooui:previous-rtl"
//                 className="pointer"
//                 // onClick={() => change_post('next')}
//             />
//             <div className={styles.candidates}>
//                 {candidates?.map((candidate, index) => (
//                     <Candidate_Card
//                         candidate={candidate.candidate_id}
//                         post_number={post_number}
//                         set_post_number={set_post_number}
//                         key={index}
//                     />
//                 ))}
//             </div>
//         </Layout>
//     );
// }
