import Head from 'next/head';
import { Left_Section } from '../components';
import styles from '../styles/layouts/dashboard_layout.module.css';
import { useContext, useEffect } from 'react';
import { applicationContext } from '../pages/_app';
import { route_for_get_user } from '../routes';
import axios from 'axios';
import { decode_token } from '../helpers';
import { useRouter } from 'next/router';

export default function Dashboard_Layout({ children, page_title }) {
    const { setConnectedUser } = useContext(applicationContext);
    const { push } = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('vote_app_token');
        if (token) {
            const user_local_data = decode_token(token);

            if (user_local_data.exp * 1000 < Date.now()) {
                localStorage.removeItem('vote_app_token');
            } else {
                axios({
                    method: 'get',
                    url: `${route_for_get_user}/${user_local_data.id}`,
                })
                    .then((response) => {
                        setConnectedUser(response.data.user);
                    })
                    .catch((error) => console.error(error));
            }
        } else {
            push('/login');
        }
    }, []);

    return (
        <>
            <div className={styles.page}>
                <Head>
                    <title>{page_title}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <Left_Section />
                    {children}
                </main>
            </div>
        </>
    );
}
