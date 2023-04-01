import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import logo from '../public/images/test.png';
import { useRouter } from 'next/router';


export default function Header() {
    const logo_group_class_name = `${styles.header_logo_group} link`;
    const router = useRouter();

    return (
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
                    <li>
                        <Link
                            href="/tarifs"
                            className={
                                router.pathname === '/tarifs'
                                    ? 'link active'
                                    : 'link'
                            }
                        >
                            Tarifs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/testimonies"
                            className={
                                router.pathname === '/testimonies'
                                    ? 'link active'
                                    : 'link'
                            }
                        >
                            Témoignages
                        </Link>
                    </li>
                    <li>
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
                    </li>
                </ul>
                <Link href="/login">
                    <button className="button_primary">Se connecter</button>
                </Link>
            </nav>
        </header>
    );
}
