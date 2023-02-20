import styles from '../styles/quality_item.module.css';

export default function Quality_Item ({quality}) {
    return (
        <li className={styles.qualities_item}>
            <div className="square shadow">
                <div className="circle_in_the_square">
                </div>
            </div>
            {quality}
        </li>
    )
}