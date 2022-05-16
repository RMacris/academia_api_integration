import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../Contexts/LoginContext';
import { GrMenu } from 'react-icons/gr'
import style from './navbar.module.css';

export function NavbarMenu()  {
    const auth = useAuthentication()
    function HandleLogout() { 
        auth.clearAuth()
    }
    return (
        <div className={style.header}>
            <h1 className={style.logo}>
                Logo
            </h1>
            <div className={style.nav_container}>
                <div className={style.navToggle}>
                    <GrMenu className={style.navToggle_icon}></GrMenu>
                </div>
                <nav className={style.nav}>
                    <ul className={style.list}>
                        <li className={style.list_item}>
                            <a className={[style.login_highlight, style.item_link ].join(' ')} href="/signin">
                                Login
                            </a>
                        </li>
                        <li className={style.list_item}>
                            <a className={style.item_link} href="/home">
                                Home
                            </a>
                        </li>
                        <li className={style.list_item}>
                            <a className={style.item_link} href="/signup">
                                SignUp
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}