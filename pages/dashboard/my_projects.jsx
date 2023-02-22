import Head from 'next/head';
import styles from '../../styles/dashboard/my_projects.module.css';
import logo from '../../public/images/test.png';
import Image from 'next/image';
import Left_Section from '../../components/left_section';

export default function My_Projects() {

    return (
        <div className={styles.page}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Left_Section />
                {/* <nav>
                    <Logo />
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className={
                                    router.pathname === '/dashboard/my_projects'
                                        ? 'left_section_link left_section_link--active'
                                        : 'left_section_link'
                                }
                            >
                                <Icon
                                    icon="fluent:vote-24-filled"
                                    className="left_section_link_icon left_section_link_icon--active"
                                />
                                Election
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/price"
                                className={
                                    router.pathname === '/dashboard/price'
                                        ? 'left_section_link left_section_link--active'
                                        : 'left_section_link'
                                }
                            >
                                <Icon
                                    icon="ic:baseline-attach-money"
                                    className="left_section_link_icon left_section_link_icon--active"
                                />
                                Prix
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/profile"
                                className="left_section_link"
                            >
                                <Icon
                                    icon="gg:profile"
                                    className="left_section_link_icon left_section_link_icon--active"
                                />
                                Profil
                            </Link>
                        </li>
                    </ul>

                    <Link href="/" className="left_section_link">
                        <Icon
                            icon="ic:round-logout"
                            className="left_section_link_icon left_section_link_icon--active"
                        />
                        Déconnexion
                    </Link>
                </nav> */}

                <section>
                    <h1>Vos projets</h1>
                    <div>
                        <div className="election_card">
                            <div>
                                <Image
                                    src={logo}
                                    alt="Picture of the author"
                                    width={40}
                                    height={40}
                                />
                            </div>

                            <div>
                                <h2>Comité G1 Economie ISC</h2>
                                <p>Début</p>
                                <p>Fin</p>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
