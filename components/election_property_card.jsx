import { Icon } from '@iconify/react';
import styles from '../styles/election_property_card.module.css';
import React from 'react';

export default function Election_Property_Card({
    title,
    label,
    icon,
    onClick,
}) {
    return (
        <div className={styles.card} onClick={onClick}>
            {/* {icon} */}
            <div className={styles.card_icon}>
                <Icon icon={icon} className={styles.icon} />
            </div>
            <div className={styles.card_text}>
                <p className={styles.card_paragraph}>{label}</p>
                <h3 className={styles.card_title}>{title}</h3>
            </div>
        </div>
    );
}
