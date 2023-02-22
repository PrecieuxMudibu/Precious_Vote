import Head from 'next/head';
import Logo from '../components/logo';
import styles from '../styles/register.module.css';
import { Icon } from '@iconify/react';
import { Quality_Item } from '@/components/index';
import Link from 'next/link';

export default function Register() {
    const main_class_name = `${styles.main} shadow`;

    return (
        <div className={styles.page}>
            <Head>
                <title>Create Next App</title>
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
                    <label className="email_group">
                        <span className="group_label">Votre nom</span>
                        <div className={styles.input_group}>
                            <Icon icon="ic:round-email" className="icon" />
                            <input
                                type="email"
                                placeholder="placide@gmail.com"
                            />
                        </div>
                    </label>

                    <label className="password_group">
                        <span className="group_label">Votre email</span>
                        <div className={styles.input_group}>
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input
                                type="password"
                                placeholder="placide@gmail.com"
                            />
                        </div>
                    </label>

                    <label className="password_group">
                        <span className="group_label">Votre mot de passe</span>
                        <div className={styles.input_group}>
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input
                                type="password"
                                placeholder="placide@gmail.com"
                            />
                        </div>
                    </label>
                    <label className="password_group">
                        <span className="group_label">
                            Confirmation de votre mot de passe
                        </span>
                        <div className={styles.input_group}>
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input
                                type="password"
                                placeholder="placide@gmail.com"
                            />
                        </div>
                    </label>

                    <div className={styles.other}>
                        <button className="button_primary">S'inscrire</button>
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
