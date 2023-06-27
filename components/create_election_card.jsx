import { Icon } from '@iconify/react';
import styles from '../styles/create_election_card.module.css';
import Link from 'next/link';

export default function Create_Election_Card() {
    return (
        <Link href="/dashboard/general_parameters" className="link">
             <Icon icon="ph:plus-fill" className={styles.create_election_card} />
        </Link>
    );
}
