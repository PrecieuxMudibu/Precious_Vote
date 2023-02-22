import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/test.png';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';

export default function Logo() {
    const router = useRouter();
    // router.pathname === '/dashboard/my_projects'
    //                                 ? 'left_section_link left_section_link--active'
    //                                 : 'left_section_link'

    // `${styles.header_logo_group} link`;
    const logo_group_class_name =
        router.pathname === '/dashboard/my_projects'
            ? `left_section_logo`
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
