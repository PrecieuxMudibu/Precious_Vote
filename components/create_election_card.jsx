import { Icon } from '@iconify/react';
import styles from '../styles/create_election_card.module.css';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { applicationContext } from '../pages/_app';

export default function Create_Election_Card() {
    const { set_indice_stepper } = useContext(applicationContext);
    useEffect(() => {
        set_indice_stepper(0);
    }, []);

    return (
        <Link href="/dashboard/create_election" className="link">
            <Icon icon="ph:plus-fill" className={styles.create_election_card} />
        </Link>
    );
}
