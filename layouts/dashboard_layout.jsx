import Head from 'next/head';
import { Left_Section } from '../components';
import styles from '../styles/layouts/dashboard_layout.module.css';
import { useContext, useEffect } from 'react';
import { applicationContext } from '../pages/_app';
import { route_for_get_user } from '../public/routes';
import axios from 'axios';
import { decodeToken } from '../helpers';
import { useRouter } from 'next/router';

export default function Dashboard_Layout({ children, page_title }) {
    const { setConnectedUser, connectedUser } = useContext(applicationContext);
    const { push } = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('vote_app_token');
        if (token) {
            const userLocalData = decodeToken(token);

            if (userLocalData.exp * 1000 < Date.now()) {
                localStorage.removeItem('vote_app_token');
            } else {
                axios({
                    method: 'get',
                    url: `${route_for_get_user}/${connectedUser._id}`,
                    //   headers: {
                    //     Authorization: token,
                    //   },
                })
                    .then((response) => {
                        console.log('USER GETTED', response);
                        setConnectedUser({
                            ...response.data.user,
                        });
                        push('/.');
                    })
                    .catch((error) => console.error(error));
            }
        } else {
            push('./login');
        }
    }, []);

    // useEffect(() => {
    //     if (localStorage.getItem("hannaelAiToken")) {
    //       const userLocalData: any = decodeToken(
    //         localStorage.getItem("hannaelAiToken") || ""
    //       );
    //       getUserMutation({
    //         variables: {
    //           args: {
    //             _id: userLocalData._id,
    //           },
    //         },
    //       });
    //       push("/.");

    //       if (userLocalData.exp * 1000 < Date.now()) {
    //         localStorage.removeItem("hannaelAiToken");
    //       } else {
    //         setUser(userLocalData);
    //       }
    //     } else {
    //       push("./login");
    //     }
    //   }, []);

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
