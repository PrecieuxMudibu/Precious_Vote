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
