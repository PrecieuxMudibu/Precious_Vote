import Link from 'next/link';
import styles from '../styles/dashboard/success_message.module.css';

import { Icon } from '@iconify/react';

export default function Success_Message({ message, action }) {
    return (
        <div className={styles.success_message}>
            <h1>{action}</h1>
            <div>
                <Icon
                    icon="mdi:success-circle-outline"
                    className={styles.success_icon}
                />
            </div>
            <p>{message}</p>

            {/* 
            <button className="button_primary success">
                Revenir à l'accueil
            </button> */}
        </div>
    );
}
