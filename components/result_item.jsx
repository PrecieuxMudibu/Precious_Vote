import Image from 'next/image';
import styles from '../styles/result_item.module.css';

export default function Result_Item({ candidate, index, picture, first_name }) {
    return (
        <div className={styles.row}>
            <div>{index}</div>
            <div>
                <Image src={picture} alt={first_name} width={65} height={65} />
            </div>
            <div>{candidate.first_name}</div>
            <div>{candidate.name}</div>
            <div>{candidate.voices}</div>
            <div>40%</div>
        </div>
    );
}
