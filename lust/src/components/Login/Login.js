import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import GlobalTheme from "../../globals";
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import './Login.css';

export default function Login(props) {
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
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme/>
                <div className='content'>
                    <div className='darkMode'>
                        <button className='luas' onClick={toggleTheme}>
                            <MdDarkMode />

                        </button>

                    </div>
                    <div className='center'>
                        <div className='form'>
                            <div className='inside-form'>
                                <div className='login'>
                                    <h1>Login</h1>
                                    <hr className='hr-login'></hr>
                                </div>


                                <div className='email'>
                                    <h3>E-mail</h3>
                                    <input type='text' className='input-email' maxLength='30'></input>
                                    <hr className='hr-email'></hr>
                                </div>

                                <div className='senha'>
                                    <h3>Senha</h3>
                                    <input type='password' className='input-senha' maxLength='16'></input>
                                    <hr className='hr-senha'></hr>
                                    <a href='' className='esqueceu'>Esqueceu a senha?</a>
                                </div>

                                <div className='entrar'>
                                    <div className='social'>
                                        <a href='' className='redonda'>
                                            <BsGoogle />
                                        </a>
                                        <a href='' className='redonda'>
                                            <BsFacebook />
                                        </a>
                                    </div>
                                    <a href='' className='a-entrar'>
                                        <h3>Entrar</h3>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>

        </ThemeProvider>

    )
}