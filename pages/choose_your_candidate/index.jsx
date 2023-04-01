import { Footer, Header } from '../../components';
import styles from '../../styles/choose_your_candidate/index.module.css'

export default function Choose_Candidate() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Election : Comité de G1 Math-Info UPN</h1>
                <p>Poste : CP</p>
            </main>
            <Footer />
        </>
    );
}
