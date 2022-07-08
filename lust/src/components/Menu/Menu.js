import React, { Fragment, useState, useEffect } from "react";
// ICONES REACT
import { BsCartFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLogout, MdDarkMode } from 'react-icons/md';
// ICONES REACT

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import MenuRodape from "../../menuRodape";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import './Menu.css';


export default function Menu(props) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
            <MenuRodape/>
                    <nav>
                        <div className="esq">
                            <a href="/home" className="lust">
                                Lust
                            </a>

                            <div className="links">
                                <li className="dropdown">
                                    <p className="categorias"><strong>Categorias</strong></p>
                                    <div className="dropdown-content">
                                        <a href="#">Dispositivos móveis</a>
                                        <a href="#">Desktops</a>
                                        <a href="#">Moda</a>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="dir">
                            <input type='text' className="search" placeholder="Pesquisar" maxLength="25"/>

                            <div className="icons">
                                <div className="shine">
                                    <button className="signout" title="Mudar tema" onClick={toggleTheme}>
                                        <MdDarkMode />
                                    </button>
                                </div>
                                <div className="shine">
                                    <a href='' className="carrinho" title="Carrinho">
                                        <BsCartFill />
                                    </a>
                                </div>

                                <div className="shine">
                                    <a href='' className="userAcount" title="Conta">
                                        <AiOutlineUser />
                                    </a>
                                </div>

                                <div className="shine">
                                    <button onClick={() => [signout(), navigate("/login")]} className="signout" title="Sair">
                                        <MdOutlineLogout />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
            </Fragment>
        </ThemeProvider>
    )
}