import Head from 'next/head';
import styles from '../styles/login.module.css';
import { Button, Input, Quality_Item } from '../components/index';
import Link from 'next/link';
import { applicationContext } from './_app';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { route_for_login } from '../public/routes';
import { useRouter } from 'next/router';

export default function Login() {
    const main_class_name = `${styles.main} shadow`;

    const [user, setUser] = useState({});
    const { push } = useRouter();
    const { connectedUser, setConnectedUser } = useContext(applicationContext);

    function login(e) {
        e.preventDefault();

        axios
            .post(route_for_login, user)
            .then((response) => {
                localStorage.setItem(
                    'vote_app_token',
                    response.data.user.token
                );
                localStorage.setItem(
                    'vote_app_user_id',
                    response.data.user._id
                );
                setConnectedUser(response.data.user);
                push(`/dashboard/my_projects`);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('Error Login --->', error);
            });
    }

    function onChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    // Redirect the user if he has a token
    useEffect(() => {
        setConnectedUser({
            ...connectedUser,
            token: localStorage.getItem('vote_app_token'),
        });

        if (connectedUser.token) {
            push(`/dashboard/my_projects`);
        }
    }, []);

    return (
        <div className={styles.page}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.top_circle}/>
            <div className={styles.bottom_circle}/>

            <header className={styles.header}>
                <h1 className={styles.header__title}>Content de vous revoir</h1>
            </header>

            <main className={main_class_name}>
                <form>
                    <Input
                        label="Votre email"
                        icon="ic:round-email"
                        name="email"
                        type="text"
                        placeholder="placide@gmail.com"
                        onChange={onChange}
                    />

                    <Input
                        label="Votre mot passe"
                        icon="jam:padlock-f"
                        name="password"
                        type="password"
                        placeholder="Votre mot de passe"
                        onChange={onChange}
                    />

                    <div className={styles.other}>
                        <Button
                            label="Se connecter"
                            onClick={(e) => login(e)}
                        />
                        <Link href="/register" className="link">
                            <p>Vous n'avez de compte</p>
                        </Link>
                    </div>
                </form>
            </main>

            <footer>
                <ul className={styles.qualities_group}>
                    <Quality_Item quality="Fiabilité" color="primary_color" />
                    <Quality_Item
                        quality="Simplicité"
                        color="secondary_color"
                    />
                    <Quality_Item quality="Rapidité" color="tertiary_color" />
                </ul>
            </footer>
        </div>
    );
}
