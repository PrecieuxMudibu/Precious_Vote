import Image from 'next/image';
import styles from '../styles/item.module.css'


export default function Item({number, picture, first_name, name}) {
    return (
        <div className={styles.candidate_row}>
            <div>{number}</div>
            <div>
                <Image
                    src={picture}
                    alt={`candidat `}
                    width={55}
                    height={55}
                />
            </div>
            <div>{first_name}</div>
            <div>{name}</div>
        </div>
    );
}
