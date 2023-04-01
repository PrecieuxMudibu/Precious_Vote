import styles from '../styles/dashboard/failed_message.module.css';

import { Icon } from '@iconify/react';

export default function Failed_Message() {
    return (
        <div className={styles.failed_message}>
            <h1>Echec du paiement</h1>
            <div>
                <Icon
                    icon="mdi:close-circle-outline"
                    className={styles.failed_icon}
                />
            </div>
            <p>Quelque chose s'est mal passé.</p>

            <button className="button_primary failed">
                Revenir à l'accueil
            </button>
        </div>
    );
}
