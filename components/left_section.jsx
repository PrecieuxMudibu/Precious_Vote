import Logo from './logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function Left_Section() {
    const router = useRouter();

    return (
        <nav>
            <Logo />

            <ul>
                <li>
                    <Link
                        href="/dashboard/my_projects"
                        className={
                            router.pathname === '/dashboard/my_projects'
                                ? 'left_section_link left_section_link--active'
                                : 'left_section_link'
                        }
                    >
                        <Icon
                            icon="fluent:vote-24-filled"
                            className={
                                router.pathname === '/dashboard/my_projects'
                                    ? 'left_section_link_icon left_section_link_icon--active'
                                    : 'left_section_link_icon'
                            }
                        />
                        Election
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/price"
                        className={
                            router.pathname === '/dashboard/price'
                                ? 'left_section_link left_section_link--active'
                                : 'left_section_link'
                        }
                    >
                        <Icon
                            icon="ic:baseline-attach-money"
                            className={
                                router.pathname === '/dashboard/price'
                                    ? 'left_section_link_icon left_section_link_icon--active'
                                    : 'left_section_link_icon'
                            }
                        />
                        Prix
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/profile"
                        className="left_section_link"
                    >
                        <Icon
                            icon="gg:profile"
                            className={
                                router.pathname === '/dashboard/profile'
                                    ? 'left_section_link_icon left_section_link_icon--active'
                                    : 'left_section_link_icon'
                            }
                        />
                        Profil
                    </Link>
                </li>
            </ul>

            <Link href="/" className="left_section_link">
                <Icon
                    icon="ic:round-logout"
                    className="left_section_link_icon"
                />
                Déconnexion
            </Link>
        </nav>
    );
}