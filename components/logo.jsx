import Link from 'next/link';
import styles from '../styles/logo.module.css';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function Logo() {
    const router = useRouter();
    const dashboard_regex = /\/dashboard\/[a-z_]+/;

    // Test if the route.pathname begin with "/dashboard/" and have another letter after that
    const logo_group_class_name = dashboard_regex.test(router.pathname)
        ? styles.left_section_logo
        : styles.header_logo_group;

    return (
        <Link href="/" className={logo_group_class_name}>
            <Icon
                className={styles.left_section_logo_icon}
                icon="fluent:vote-24-filled"
            />
            <p className={styles.header__text}>Vote</p>
        </Link>
    );
}
