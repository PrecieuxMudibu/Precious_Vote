import styles from '../styles/choose_your_candidate/index.module.css';
import { Candidate_Card } from '../components';
import Layout from '../components/layouts/layout';

export default function Choose_Candidate() {
    return (
        <Layout>
            <h1>Election : Comité de G1 Math-Info UPN</h1>
            <h2>Poste : CP</h2>
            <div className={styles.candidates}>
                <Candidate_Card />
                <Candidate_Card />
                <Candidate_Card />
                <Candidate_Card />
                <Candidate_Card />
            </div>
            
        </Layout>
    );
}
