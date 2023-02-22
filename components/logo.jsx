import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/test.png';
import styles from '../styles/login.module.css';

export default function Logo() {
    const logo_group_class_name = `${styles.header_logo_group} link`;

    return (
        <Link href="/" className={logo_group_class_name}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={40}
                height={40}
            />
            <p className={styles.header__text}>jevote</p>
        </Link>
    );
}
