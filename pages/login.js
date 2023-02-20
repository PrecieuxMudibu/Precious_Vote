import Head from "next/head";
import Image from "next/image";
import logo from '../public/images/test.png';
import login from '../styles/login.module.css';
import { Icon } from '@iconify/react';
import { Quality_Item } from "@/components/index";

export default function Login () {

    const mainClassName = `${login.main} shadow`
    return (
        <>
        
        <div className={login.page}>
            <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className={login.top_circle}></div>
            <div className={login.bottom_circle}></div>

            <header className={login.header}>
                <div className={login.header_logo_group}>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                    />
                    <p className={login.header__text}>jevote</p>
                </div>
                <h1 className={login.header__title}>Content de vous revoir</h1>
            </header>

            {/* <main className={login.main}> */}
            <main className={mainClassName}>
                <form>
                    <label className="email_group">
                        <span className="group_label">Votre email</span>
                        <div className={login.input_group}>
                            <Icon icon="ic:round-email" className="icon" />
                            <input type="email" placeholder="placide@gmail.com" />
                        </div>
                    </label>

                    <label className="password_group">
                        <span className="group_label">Votre mot passe</span>
                        <div className={login.input_group}>
                            <Icon icon="jam:padlock-f" className="icon" />
                            <input type="password" placeholder="placide@gmail.com" />
                        </div>
                    </label>

                    <div className={login.other}>
                        <button className="button_primary">Se connecter</button>     
                        <p>Vous n'avez de compte</p>
                    </div>
                </form>

                
                   
            </main>

            <footer>
                <ul className={login.qualities_group}>
                    <Quality_Item quality="Fiabilité" />
                    <Quality_Item quality="Simplicité" />
                    <Quality_Item quality="Rapidité" />
                        

                        

                        
                    </ul>
            </footer>
            
        </div>
        </>
    )
}