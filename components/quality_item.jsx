import styles from '../styles/quality_item.module.css'

export default function Quality_Item ({ quality, color }) {
    const circle = `${styles.circle_in_the_square} ${color}`
    return (
        <li className={styles.qualities_item}>
            <div className="square shadow">
                <div className={circle}></div>
            </div>
            {quality}
        </li>
    )
}
