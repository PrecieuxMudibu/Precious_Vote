import styles from '../styles/dashboard/success_message.module.css';

import { Icon } from '@iconify/react';

export default function Success_Message() {
    return (
        <div className={styles.success_message}>
            <h1>Paiement réussi</h1>
            <div>
                <Icon
                    icon="mdi:success-circle-outline"
                    className={styles.success_icon}
                />
            </div>
            <p>
                Votre élection pourrez débuter le 07/03/2023 pour s’achever le
                08/03/2023
            </p>

            <button className="button_primary success">
                Revenir à l'accueil
            </button>
        </div>
    );
}
