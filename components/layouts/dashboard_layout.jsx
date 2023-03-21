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
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                        crossOrigin="anonymous"
                    ></link>
                </Head>
                <main className={styles.main}>
                    <Left_Section />
                    {children}
                </main>
                <script
                    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
                    crossOrigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
                    integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
                    crossOrigin="anonymous"
                ></script>
            </div>
        </>
    );
}
