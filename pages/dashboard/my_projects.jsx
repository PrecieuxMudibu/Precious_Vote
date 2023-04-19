import styles from '../../styles/dashboard/my_projects.module.css';
import axios from 'axios';
import { route_for_get_election_of_the_user } from '../../public/routes';
import {
    Election_Card,
    Create_Election_Card,
    Dashboard_Layout,
} from '../../components/index';
import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react';
import { applicationContext } from '../_app';

export default function My_Projects() {
    const { connectedUser } = useContext(applicationContext);
    const [elections, set_elections] = useState([]);

    useEffect(() => {
        axios
            .get(`${route_for_get_election_of_the_user}/${connectedUser._id}`)
            .then((response) => {
                set_elections(response.data.elections);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('error--->>>', error);
            });
    }, [connectedUser]);

    useEffect(() => {
        console.log('elections>>>', elections);
    }, [elections]);

    return (
        <Dashboard_Layout page_title="Mes projets">
            <section>
                <div className={styles.title_and_search_bar}>
                    <h1>Vos projets</h1>
                    <div>
                        <Icon icon="ic:outline-search" className="icon" />
                        <input
                            type="email"
                            placeholder="Recherchez votre projet ici"
                        />
                    </div>
                </div>
                <Create_Election_Card />

                <div className={styles.elections_group}>
                    {elections.map((election, index) => (
                        <Election_Card election={election} key={index} />
                    ))}
                </div>
            </section>
        </Dashboard_Layout>
    );
}
