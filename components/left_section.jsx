/* eslint-disable no-console */
import Logo from './logo';
import Link from 'next/link';
import styles from '../styles/left_section.module.css';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function Left_Section() {
    const { push } = useRouter();

    function link_get_active_class_name_if_router_path_name(route) {
        const router = useRouter();
        if (router.pathname === route) {
            return `${styles.left_section_link} ${styles.left_section_link_active}`;
        } else return styles.left_section_link;
    }

    function icon_get_active_class_name_if_router_path_name(route) {
        const router = useRouter();
        if (router.pathname === route) {
            return `${styles.left_section_link_icon} ${styles.left_section_link_icon_active}`;
        } else return styles.left_section_link_icon;
    }

    function logout() {
        localStorage.removeItem('vote_app_token');
        localStorage.removeItem('vote_app_user_id');
        push(`/login`);
    }

    return (
        <nav className={styles.nav}>
            <Logo />

            <ul>
                <li>
                    <Link
                        href="/dashboard/my_projects"
                        className={link_get_active_class_name_if_router_path_name(
                            '/dashboard/my_projects'
                        )}
                    >
                        <Icon
                            icon="fluent:vote-24-filled"
                            className={icon_get_active_class_name_if_router_path_name(
                                '/dashboard/my_projects'
                            )}
                        />
                        <span>Election</span>
                    </Link>
                </li>
            </ul>

            <button onClick={() => logout()} className={styles.button_logout}>
                <Icon
                    icon="ic:round-logout"
                    className={styles.left_section_link_icon}
                />
                <span>Déconnexion</span>
            </button>
        </nav>
    );
}
