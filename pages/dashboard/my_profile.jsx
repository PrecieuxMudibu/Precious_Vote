import Image from 'next/image';
import { Button, Dashboard_Layout, Input } from '../../components/index';
import udate_user_image from '../../public/images/update_user.jpg';
import styles from '../../styles/dashboard/my_profile.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { applicationContext } from '../_app';

export default function My_Profile() {
    const inputFile = useRef();
    const { connectedUser } = useContext(applicationContext);
    const [user_update, set_user_update] = useState(connectedUser);
    useEffect(() => {
        set_user_update(connectedUser);
    }, [connectedUser]);

    console.log('user_update', user_update);

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
        <Dashboard_Layout page_title="Mon profil">
            <section>
                <div className={styles.profile}>
                    <div className={styles.profile_background_image_section} />

                    <div className={styles.profile_image_section}>
                        <div>
                            <Image
                                src={user_update?.profile_picture}
                                alt="Entite avatar"
                                className={styles.profile_image}
                                height={100}
                                width={100}
                            />
                            <span className={styles.edit_image}>
                                <Icon
                                    icon="material-symbols:edit"
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
                            label="Nom"
                            icon="wpf:name"
                            name="email"
                            type="text"
                            placeholder=""
                            onChange={onChange}
                            value={user_update?.name}
                        />
                        <Input
                            label="Email"
                            icon="ic:round-email"
                            name="email"
                            type="text"
                            placeholder=""
                            onChange={onChange}
                            value={user_update?.email}
                        />
                        <Input
                            label="Ancien mot de passe"
                            icon="mdi:password"
                            name="email"
                            type="text"
                            placeholder="placide@gmail.com"
                            onChange={onChange}
                        />
                        <Input
                            label="Nouveau mot de passe"
                            icon="mdi:password"
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
