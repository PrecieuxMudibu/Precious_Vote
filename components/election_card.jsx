/* eslint-disable no-console */
import logo from '../public/images/test.png';
import Image from 'next/image';
import styles from '../styles/election_card.module.css';
import { Icon } from '@iconify/react';

export default function Election_Card({ election }) {
    return (
        <div className={styles.election_card}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={75}
                height={75}
                className={styles.election_card__image}
            />

            <div className={styles.election_card__details}>
                <h2 className={styles.election_card__name}>{election.name}</h2>
                <div className={styles.election_card__statistics}>
                    <p>
                        <Icon
                            className={styles.left_section_logo_icon}
                            icon="eos-icons:role-binding"
                        />
                        {election.posts.length} postes
                    </p>
                    <p>
                        <Icon
                            className={styles.left_section_logo_icon}
                            icon="emojione-monotone:vs-button"
                        />
                        {election.two_rounds ? '2 rounds' : '1 round'}
                    </p>
                </div>

                <div className={styles.election_card__footer}>
                    <div>
                        <h3>Candidats</h3>
                        <div>
                            {/* {election.posts[0].candidates} */}
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={20}
                                height={20}
                                // className={styles.election_card__image}
                            />
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={20}
                                height={20}
                                // className={styles.election_card__image}
                            />
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={20}
                                height={20}
                                // className={styles.election_card__image}
                            />
                        </div>
                    </div>

                    <div>
                        <h3>Electeurs</h3>
                        <p className={styles.election_card__electors}>
                            {' '}
                            {election.electors.length}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
