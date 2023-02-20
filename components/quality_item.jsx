import styles from '../styles/quality_item.module.css';

export default function Quality_Item ({quality, color}) {

    
    const qua_class = `${styles.circle_in_the_square} ${color}`
    return (
        <li className={styles.qualities_item}>
            <div className="square shadow">
                <div className={qua_class}>
                </div>
            </div>
            {quality}
        </li>
    )
}