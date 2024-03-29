import Image from 'next/image';
import no_data from '../public/images/no_data.png';
import styles from '../styles/no_data.module.css';

export default function No_Data({label}) {
    return (
        <div className={styles.no_data}>
            <h2>{label}</h2>
            <Image src={no_data} width={500} height={400} />
        </div>
    );
}
