import Head from 'next/head';
import styles from '../styles/register.module.css';
import { Icon } from '@iconify/react';
import { Button, Quality_Item } from '../components/index';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { route_for_register } from '../routes';
import { useRouter } from 'next/router';
import { applicationContext } from './_app';
import { useContext } from 'react';
import { decode_token } from '../helpers';

export default function Register() {
    const [user, set_user] = useState({});
    const main_class_name = `${styles.main} shadow`;

    const { setConnectedUser } = useContext(applicationContext);

    const { push } = useRouter();

    function register(e) {
        e.preventDefault();

        if (
            user.name != '' &&
            user.email != '' &&
            user.password == user.confirm_password
        ) {
            axios
                .post(route_for_register, user)
                .then((response) => {
                    localStorage.setItem(
                        'vote_app_token',
                        response.data.user.token
                    );
                    setConnectedUser({ ...response.data.user });
                    push(`/dashboard/my_projects`);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function onChange(e) {
        const { name, value } = e.target;
        set_user({ ...user, [name]: value });
    }

    useEffect(() => {
        const token = localStorage.getItem('vote_app_token');
        if (token) {
            const user_local_data = decode_token(token);

            if (user_local_data.exp * 1000 < Date.now()) {
                localStorage.removeItem('vote_app_token');
            } else {
                push(`/dashboard/my_projects`);
            }
        }
    }, []);

    return (
        <div className={styles.page}>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.top_circle}></div>
            <div className={styles.bottom_circle}></div>

            <header className={styles.header}>
                <h1 className={styles.header__title}>
                    Content de vous revoir !
                </h1>
            </header>

            <main className={main_class_name}>
                <form>
                    <label>
                        <span>Votre nom</span>
                        <div className="input_group">
                            <Icon icon="ic:round-email" className="icon" />
                            <input
                                onChange={onChange}
                                name="name"
                                type="text"
                                placeholder="Placide Bishiya"
                            />
                        </div>
                    </label>

                    <label>
                        <span>Votre email</span>
                        <div className="input_group">
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input
                                onChange={onChange}
                                name="email"
                                type="email"
                                placeholder="placide@gmail.com"
                            />
                        </div>
                    </label>

                    <label>
                        <span>Votre mot de passe</span>
                        <div className="input_group">
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input
                                onChange={onChange}
                                name="password"
                                type="password"
                                placeholder="m0tdepa$$eSup€R$Ecre7"
                            />
                        </div>
                    </label>
                    <label>
                        <span>Confirmation de votre mot de passe</span>
                        <div className="input_group">
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input
                                onChange={onChange}
                                name="confirm_password"
                                type="password"
                                placeholder="m0tdepa$$eSup€R$Ecre7"
                            />
                        </div>
                    </label>

                    <div className={styles.other}>
                        <Button
                            label="S'inscrire"
                            onClick={(e) => register(e)}
                        />
                        <Link href="/login" className="link">
                            <p>Vous avez déjà un compte ?</p>
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
