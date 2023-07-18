import Image from 'next/image';
import { Dashboard_Layout } from '../../components/index';
import udate_user_image from '../../public/images/update_user.jpg';
import styles from '../../styles/dashboard/my_profile.module.css';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

export default function My_Profile() {
    const inputFile = useRef();

    const onChange = async (e) => {
        const body = new FormData();
        body.append('file', e.target.files[0]);

        const content = {
            method: 'post',
            body,
        };
        const localLink = URL.createObjectURL(e.target.files[0]);
        // setValue('image', { content, localLink });

        // setUser((previousState) => ({
        //     ...previousState,
        //     image: {
        //         content,
        //         localLink,
        //     },
        // }));
        // handleSubmit(() => null)();
    };

    return (
        <Dashboard_Layout page_title="Paramètres généraux">
            <section>
                <div className={styles.profile}>
                    <div className={styles.profile_background_image_section} />

                    <div className={styles.profile_image_section}>
                        <div>
                            <Image
                                src={udate_user_image}
                                alt="Entite avatar"
                                className={styles.profile_image}
                                height={100}
                                width={100}
                            />
                            <span className={styles.edit_image}>
                                <Icon
                                    icon="fluent:vote-24-filled"
                                    className={styles.edit_image_icon}
                                />
                                <input
                                    className="hidden"
                                    type="file"
                                    ref={inputFile}
                                    onChange={onChange}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            ;
        </Dashboard_Layout>
    );
}
