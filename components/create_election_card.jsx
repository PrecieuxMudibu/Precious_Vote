import styles from '../styles/create_election_card.module.css';

export default function Create_Election_Card() {
    return (
        <div className={styles.create_election_card}>
            <div className={styles.plus_sign}>
                <div className={styles.vertical_bar}></div>
                <div className={styles.horizontal_bar}></div>
            </div>

            <div className={styles.election_card__details}>
                <h2>Créez un nouveau projet</h2>
            </div>
        </div>
    );
}
