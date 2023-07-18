import Image from 'next/image';
import { Button, Dashboard_Layout, Input } from '../../components/index';
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
                                    onClick={() => inputFile.current.click()}
                                />
                                <input
                                    className="hidden"
                                    type="file"
                                    ref={inputFile}
                                    onChange={onChange}
                                />
                            </span>
                        </div>

                        <div className={styles.profile_name}>
                            <h2>Précieux Mudibu</h2>
                        </div>
                    </div>

                    <div className={styles.profile_inputs_section}>
                        <Input
                            label="Votre email"
                            icon="ic:round-email"
                            name="email"
                            type="text"
                            placeholder="placide@gmail.com"
                            onChange={onChange}
                        />
                        <Input
                            label="Votre email"
                            icon="ic:round-email"
                            name="email"
                            type="text"
                            placeholder="placide@gmail.com"
                            onChange={onChange}
                        />
                        <Input
                            label="Votre email"
                            icon="ic:round-email"
                            name="email"
                            type="text"
                            placeholder="placide@gmail.com"
                            onChange={onChange}
                        />
                        <Input
                            label="Votre email"
                            icon="ic:round-email"
                            name="email"
                            type="text"
                            placeholder="placide@gmail.com"
                            onChange={onChange}
                        />
                        <Button
                            label="Enregistrer"
                            // onClick={(e) => login(e)}
                        />
                    </div>
                </div>
            </section>
            ;
        </Dashboard_Layout>
    );
}
