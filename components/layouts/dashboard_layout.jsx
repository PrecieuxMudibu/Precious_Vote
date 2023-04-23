import Head from 'next/head';
import Left_Section from '../left_section';
import styles from '../../styles/layouts/dashboard_layout.module.css';

export default function Dashboard_Layout({ children, page_title }) {
    return (
        <>  
            <div className={styles.page}>
                <Head>
                    <title>{page_title}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <Left_Section />
                    {children}
                </main>
            </div>
        </>
    );
}
