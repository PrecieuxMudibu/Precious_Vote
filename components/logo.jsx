import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/test.png';
import styles from '../styles/logo.module.css';
import { useRouter } from 'next/router';

export default function Logo() {
    const router = useRouter();
    const dashboard_regex = /\/dashboard\/[a-z_]+/;

    // Test if the route.pathname begin with "/dashboard/" and have another letter after that
    const logo_group_class_name = dashboard_regex.test(router.pathname)
        ? styles.left_section_logo
        : styles.header_logo_group;

    return (
        <Link href="/" className={logo_group_class_name}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={55}
                height={55}
            />
            <p className={styles.header__text}>jevote</p>
        </Link>
    );
}
