import Link from 'next/link';
import styles from '../styles/header.module.css';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { useEffect, useContext } from 'react';
import { get_a_token } from '../requests';
import { applicationContext } from '../pages/_app';

export default function Header() {
    const { set_fake_token } = useContext(applicationContext);
    useEffect(() => {
        get_a_token().then((response) => {
            set_fake_token(response?.data?.token);
        });
    }, []);

    const logo_group_class_name = `${styles.header_logo_group} link`;
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.header_logo_group}>
                <Link href="/" className={logo_group_class_name}>
                    <Icon
                        icon="fluent:vote-24-filled"
                        className={styles.header_logo}
                    />
                    <p className={styles.header__text}>Vote</p>
                </Link>
            </div>

            <nav className={styles.header__nav}>
                <ul>
                    <li>
                        <Link
                            href="/"
                            className={
                                router.pathname === '/' ? 'link active' : 'link'
                            }
                        >
                            A propos
                        </Link>
                    </li>

                    {/* <li>
                        <Link
                            href="/contact"
                            className={
                                router.pathname === '/contact'
                                    ? 'link active'
                                    : 'link'
                            }
                        >
                            Contact
                        </Link>
                    </li> */}
                </ul>
                <Link href="/login">
                    <button className="button_primary">Se connecter</button>
                </Link>
            </nav>
        </header>
    );
}
