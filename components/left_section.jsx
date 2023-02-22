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
                                className="left_section_link_icon left_section_link_icon--active"
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
                                className="left_section_link_icon left_section_link_icon--active"
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
                                className="left_section_link_icon left_section_link_icon--active"
                            />
                            Profil
                        </Link>
                    </li>
                </ul>

                <Link href="/" className="left_section_link">
                    <Icon
                        icon="ic:round-logout"
                        className="left_section_link_icon left_section_link_icon--active"
                    />
                    Déconnexion
                </Link>
            </nav>
    );
}
