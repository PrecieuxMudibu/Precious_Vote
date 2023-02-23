import logo from '../public/images/test.png';
import Image from 'next/image';
import styles from '../styles/election_card.module.css';

export default function Election_Card() {
    return (
        <div className={styles.election_card}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={85}
                height={88}
                className={styles.election_card__image}
            />

            <div className={styles.election_card__details}>
                <h2 className={styles.election_card__name}>
                    Comité G1 Economie ISC
                </h2>
                <div className={styles.election_card__date}>
                    <p>Début</p>
                    <p>Fin</p>
                </div>
            </div>

            <div className={styles.election_status}></div>
        </div>
    );
}
