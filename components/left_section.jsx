import Logo from './logo';
import Link from 'next/link';
import styles from '../styles/left_section.module.css';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function Left_Section() {
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
                        Election
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/price"
                        className={link_get_active_class_name_if_router_path_name(
                            '/dashboard/price'
                        )}
                    >
                        <Icon
                            icon="ic:baseline-attach-money"
                            className={icon_get_active_class_name_if_router_path_name(
                                '/dashboard/price'
                            )}
                        />
                        Prix
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/profile"
                        className={link_get_active_class_name_if_router_path_name(
                            '/dashboard/profile'
                        )}
                    >
                        <Icon
                            icon="gg:profile"
                            className={icon_get_active_class_name_if_router_path_name(
                                '/dashboard/profile'
                            )}
                        />
                        Profil
                    </Link>
                </li>
            </ul>

            <Link href="/" className={styles.left_section_link}>
                <Icon
                    icon="ic:round-logout"
                    className={styles.left_section_link_icon}
                />
                Déconnexion
            </Link>
        </nav>
    );
}
