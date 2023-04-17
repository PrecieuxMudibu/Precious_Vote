import Head from 'next/head';
import styles from '../styles/login.module.css';
import { Icon } from '@iconify/react';
import { Quality_Item } from '../components/index';
import Link from 'next/link';
import Logo from '../components/logo';
import { applicationContext } from './_app';
import { useContext } from 'react';

export default function Login() {
    const main_class_name = `${styles.main} shadow`;
    const { connectedUser, setConnectedUser } = useContext(applicationContext);

    return (
        <div className={styles.page}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.top_circle}></div>
            <div className={styles.bottom_circle}></div>

            <header className={styles.header}>
                <div className={styles.header_logo_group}>
                    <Logo />
                </div>
                <h1 className={styles.header__title}>Content de vous revoir</h1>
            </header>

            <main className={main_class_name}>
                <form>
                    <label>
                        <span>Votre email</span>
                        <div className="input_group">
                            <Icon icon="ic:round-email" className="icon" />
                            <input
                                type="email"
                                placeholder="placide@gmail.com"
                            />
                        </div>
                    </label>

                    <label>
                        <span>Votre mot passe</span>
                        <div className="input_group">
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input
                                type="password"
                                placeholder="placide@gmail.com"
                            />
                        </div>
                    </label>

                    <div className={styles.other}>
                        <button className="button_primary">Se connecter</button>
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
