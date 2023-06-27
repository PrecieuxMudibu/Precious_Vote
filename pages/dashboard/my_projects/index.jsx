import styles from '../../../styles/dashboard/my_projects.module.css';
import axios from 'axios';
import { route_for_get_election_of_the_user } from '../../../routes';
import {
    Election_Card,
    Create_Election_Card,
    Dashboard_Layout,
} from '../../../components/index';
import { useContext, useEffect, useState } from 'react';
import { applicationContext } from '../../_app';
import Link from 'next/link';

export default function My_Projects() {
    const { connectedUser, token } = useContext(applicationContext);
    const [elections, set_elections] = useState([]);

    console.log('connectedUser', connectedUser);

    useEffect(() => {
        axios
            .get(`${route_for_get_election_of_the_user}/${connectedUser._id}`, {
                headers: { Authorization: token },
            })
            .then((response) => {
                set_elections(response.data.elections);
            })
            .catch((error) => {
                console.log('error--->>>', error);
            });
    }, [connectedUser]);

    console.log('elections', elections);

    return (
        <Dashboard_Layout page_title="Mes projets">
            <section>
                <div className={styles.title_and_create_button}>
                    <h1>Vos projets</h1>
                    <Create_Election_Card />
                </div>

                <div className={styles.elections_group}>
                    {elections.map((election, index) => (
                        <Link
                            className="link"
                            key={index}
                            href={`/dashboard/my_projects/${election._id}`}
                        >
                            <Election_Card election={election} />
                        </Link>
                    ))}
                </div>
            </section>
        </Dashboard_Layout>
    );
}
