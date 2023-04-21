import styles from '../styles/item.module.css';

export default function Item({ number, picture, first_name, name }) {
    return (
        <div className={styles.candidate_row}>
            <div>{number + 1}</div>
            <div>
                <img
                    src={
                        picture == undefined
                            ? `https://gem.ec-nantes.fr/wp-content/uploads/2019/01/profil-vide.png`
                            : `${picture}`
                    }
                    className={styles.image}
                    alt={first_name}
                />
            </div>
            <div>{first_name}</div>
            <div>{name}</div>
        </div>
    );
}
