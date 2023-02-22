import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/images/test.png';
import styles from '../styles/login.module.css';
import { Icon } from '@iconify/react';
import { Quality_Item } from '@/components/index';
import Link from 'next/link';

export default function Login() {
    const logo_group_class_name = `${styles.header_logo_group} link`;
    const main_class_name = `${styles.main} shadow`;
    return (
        <>
            <div className={styles.page}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className={styles.top_circle}></div>
                <div className={styles.bottom_circle}></div>

                <header className={styles.header}>
                    <div className={styles.header_logo_group}>
                        <Link href="/" className={logo_group_class_name}>
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={40}
                                height={40}
                            />
                            <p className={styles.header__text}>jevote</p>
                        </Link>
                    </div>
                    <h1 className={styles.header__title}>
                        Content de vous revoir
                    </h1>
                </header>

                <main className={main_class_name}>
                    <form>
                        <label className="email_group">
                            <span className="group_label">Votre email</span>
                            <div className={styles.input_group}>
                                <Icon icon="ic:round-email" className="icon" />
                                <input
                                    type="email"
                                    placeholder="placide@gmail.com"
                                />
                            </div>
                        </label>

                        <label className="password_group">
                            <span className="group_label">Votre mot passe</span>
                            <div className={styles.input_group}>
                                <Icon icon="jam:padlock-f" className="icon" />
                                <input
                                    type="password"
                                    placeholder="placide@gmail.com"
                                />
                            </div>
                        </label>

                        <div className={styles.other}>
                            <button className="button_primary">
                                Se connecter
                            </button>
                            <Link href="/register" className="link">
                                <p>Vous n'avez de compte</p>
                            </Link>
                        </div>
                    </form>
                </main>

                <footer>
                    <ul className={styles.qualities_group}>
                        <Quality_Item
                            quality="Fiabilité"
                            color="primary_color"
                        />
                        <Quality_Item
                            quality="Simplicité"
                            color="secondary_color"
                        />
                        <Quality_Item
                            quality="Rapidité"
                            color="tertiary_color"
                        />
                    </ul>
                </footer>
            </div>
        </>
    );
}
