import styles from '../../styles/dashboard/my_projects.module.css';
import Head from 'next/head';
import Left_Section from '../../components/left_section';

export default function Price() {
    return (
        <>
            <div className={styles.page}>
                <Head>
                    <title>Login</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <Left_Section />
                </main>
            </div>
        </>
    );
}
