import Image from 'next/image';
import candidate from '../public/images/candidate.jpg';
import styles from '../styles/candidate_card.module.css';

export default function Candidate_Card() {
    return (
        <div className={styles.candidate_card}>
            <Image src={candidate} alt="" width={210} height={172} className={styles.candidate_image} />
            <h2>Belle Grâce Tshilanda</h2>
            <button className="button_primary">Voter</button>
        </div>
    );
}
