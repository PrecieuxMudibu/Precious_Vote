import styles from '../styles/result_item.module.css';

export default function Result_Item({ candidate, index, percentage }) {
    return (
        <div className={styles.row}>
            <div>{index+1}</div>
            <div>
                <img src={candidate.candidate.picture} alt={candidate.name} className={styles.image} />
                {/* <Image src={candidate.picture} alt={first_name} width={65} height={65} /> */}
            </div>
            <div>{candidate.candidate.first_name}</div>
            <div>{candidate.candidate.name}</div>
            <div>{candidate.voices}</div>
            <div>{percentage} %</div>
        </div>
    );
}
