import Head from 'next/head';
// import styles from '../../styles/layouts/layout.module.css';
import styles from '../styles/layouts/layout.module.css';

import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children, page_title }) {
    return (
        <>
            <div className={styles.page}>
                <Head>
                    <title>{page_title}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                        crossOrigin="anonymous"
                    ></link>
                </Head>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        </>
    );
}
