/* eslint-disable no-console */
import Logo from './logo';
import Link from 'next/link';
import styles from '../styles/left_section.module.css';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { useContext, useEffect } from 'react';
import { applicationContext } from '../pages/_app';
import axios from 'axios';
import { route_for_get_user } from '../public/routes';

export default function Left_Section() {
    const { push } = useRouter();

    const { setConnectedUser, connectedUser } = useContext(applicationContext);

    useEffect(() => {
        setConnectedUser({
            ...connectedUser,
            _id: localStorage.getItem('vote_app_user_id'),
            token: localStorage.getItem('vote_app_token'),
        });

        axios({
            method: 'get',
            url: `${route_for_get_user}/${connectedUser._id}`,
            //   headers: {
            //     Authorization: token,
            //   },
        })
            .then((response) => {
                console.log('TEST');
                setConnectedUser({
                    ...response.data.user,
                    _id: localStorage.getItem('vote_app_user_id'),
                    token: localStorage.getItem('vote_app_token'),
                });
            })
            .catch((error) => console.error(error));
    }, [connectedUser._id]);

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

            <button onClick={() => logout()} className={styles.button_logout}>
                <Icon
                    icon="ic:round-logout"
                    className={styles.left_section_link_icon}
                />
                Déconnexion
            </button>
        </nav>
    );
}
