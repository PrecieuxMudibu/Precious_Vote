/* eslint-disable no-console */
import logo from '../public/images/test.png';
import Image from 'next/image';
import styles from '../styles/election_card.module.css';

export default function Election_Card({ election }) {
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
                <h2 className={styles.election_card__name}>{election.name}</h2>
                <div className={styles.election_card__date}>
                    {/* <p>Début : 19/11/2023</p>
                    <p>Fin : 20/11/2023</p> */}
                </div>
            </div>

            <div className={styles.election_status}></div>
        </div>
    );
}
