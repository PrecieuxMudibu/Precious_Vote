import Image from 'next/image';
import styles from '../styles/result_item.module.css';

export default function Result_Item({
    number,
    picture,
    first_name,
    name,
    number_of_voice,
    percentage_of_voice,
}) {
    return (
        <div className={styles.row}>
            <div>{number}</div>
            <div>
                <Image src={picture} alt={first_name} width={65} height={65} />
            </div>
            <div>{first_name}</div>
            <div>{name}</div>
            <div>{number_of_voice}</div>
            <div>{percentage_of_voice}</div>
        </div>
    );
}
