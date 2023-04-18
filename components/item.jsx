import styles from '../styles/item.module.css';

export default function Item({ number, picture, first_name, name }) {
    return (
        <div className={styles.candidate_row}>
            <div>{number}</div>
            <div>
                <img src={`${picture}`} className={styles.image} alt={first_name} />
            </div>
            <div>{first_name}</div>
            <div>{name}</div>
        </div>
    );
}
