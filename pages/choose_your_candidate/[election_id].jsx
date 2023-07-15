/* eslint-disable no-console */
import styles from '../../styles/choose_your_candidate/index.module.css';
import { Candidate_Card } from '../../components';
import Layout from '../../layouts/layout';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { get_an_election } from '../../requests';
import { Icon } from '@iconify/react';
import { applicationContext } from '../_app';

export default function Choose_Candidate() {
    const { fake_token } = useContext(applicationContext);

    const { query } = useRouter();

    const { election_id } = query;
    const [post_index, set_post_index] = useState(0);
    const [current_post, set_current_post] = useState(0);
    const [election, set_election] = useState([]);

    useEffect(() => {
        get_an_election(election_id, fake_token)
            .then((response) => {
                set_election(response.data.election);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [query]);

    useEffect(() => {
        if (election?.posts) {
            set_current_post(election?.posts[post_index]);
        }
    }, [post_index, election]);

    return (
        <Layout>
            <h1>{election?.name}</h1>
            <h2>Poste : {current_post?.name}</h2>

            {post_index != 0 && (
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
            )}
            {(post_index >= 0) & (post_index < election?.posts?.length - 1) && (
                <div
                    className={styles.navigate_button}
                    onClick={() => {
                        set_post_index((post_index) => post_index + 1);
                    }}
                >
                    Suivant
                    <Icon icon="ooui:previous-rtl" className="pointer" />
                </div>
            )}

            <div className={styles.candidates}>
                {current_post.rounds &&
                current_post?.rounds[0]?.status === 'In progress'
                    ? current_post?.rounds[0]?.candidates?.map(
                          (candidate, index) => (
                              <Candidate_Card
                                  candidate={candidate}
                                  round_id={current_post?.rounds[0]?._id}
                                  key={index}
                              />
                          )
                      )
                    : current_post.rounds &&
                      current_post?.rounds[1]?.status === 'In progress' &&
                      current_post?.rounds[1]?.candidates?.map(
                          (candidate, index) => (
                              <Candidate_Card
                                  candidate={candidate}
                                  round_id={current_post?.rounds[1]?._id}
                                  key={index}
                              />
                          )
                      )}
            </div>
        </Layout>
    );
}
