import Image from 'next/image';
import { Button, Dashboard_Layout, Input } from '../../components/index';
import udate_user_image from '../../public/images/update_user.jpg';
import styles from '../../styles/dashboard/my_profile.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { applicationContext } from '../_app';
import axios from 'axios';
import { cloud_name } from '../../helpers';

export default function My_Profile() {
    const inputFile = useRef();
    const { connectedUser } = useContext(applicationContext);
    const [user_update, set_user_update] = useState(connectedUser);
    useEffect(() => {
        set_user_update(connectedUser);
    }, [connectedUser]);

    console.log('user_update', user_update);

    async function on_change(e) {
        const { name, value } = e.target;

        set_user_update((previous_state) => ({
            ...previous_state,
            [name]: value,
        }));
    }

    async function on_change_image(e) {
        const body = new FormData();
        if (e?.target.files) {
            body.append('file', e?.target.files[0]);
            body.append('upload_preset', 'testPresetName');

            const content = {
                method: 'post',
                body,
            };
            const local_link = URL?.createObjectURL(e.target.files[0]);
            set_user_update((previous_state) => ({
                ...previous_state,
                profile_picture: {
                    content,
                    local_link,
                },
            }));
        }
    }

    async function upload_image() {
        // const formData = new FormData();
        // formData.append('file', fileInfo);
        // formData.append('upload_preset', 'testPresetName');

        axios
            .post(
                `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                user_update.profile_picture.content.body
            )
            .then((response) => response.data.secure_url)
            .catch((error) => console.log(error));
    }

    return (
        <Dashboard_Layout page_title="Mon profil">
            <section>
                <div className={styles.profile}>
                    <div className={styles.profile_background_image_section} />

                    <div className={styles.profile_image_section}>
                        <div>
                            {user_update?.profile_picture?.local_link ? (
                                <Image
                                    src={
                                        user_update?.profile_picture?.local_link
                                    }
                                    alt="Entite avatar"
                                    className={styles.profile_image}
                                    height={100}
                                    width={100}
                                />
                            ) : (
                                <Image
                                    src={user_update?.profile_picture}
                                    alt="Entite avatar"
                                    className={styles.profile_image}
                                    height={100}
                                    width={100}
                                />
                            )}

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
                                    onChange={on_change_image}
                                />
                            </span>
                        </div>

                        <div className={styles.profile_name}>
                            <h2>{user_update?.name}</h2>
                        </div>
                    </div>

                    <div className={styles.profile_inputs_section}>
                        <Input
                            label="Nom"
                            icon="wpf:name"
                            name="name"
                            type="text"
                            placeholder=""
                            onChange={on_change}
                            value={user_update?.name}
                        />
                        <Input
                            label="Email"
                            icon="ic:round-email"
                            name="email"
                            type="text"
                            placeholder=""
                            onChange={on_change}
                            value={user_update?.email}
                        />
                        <Input
                            label="Ancien mot de passe"
                            icon="mdi:password"
                            name="old_password"
                            type="text"
                            placeholder="Ancien mot de passe"
                            onChange={on_change}
                        />
                        <Input
                            label="Nouveau mot de passe"
                            icon="mdi:password"
                            name="password"
                            type="text"
                            placeholder="Nouveau mot de passe"
                            onChange={on_change}
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
