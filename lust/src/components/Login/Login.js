import React from 'react';
import './Login.css';
import { BsGoogle, BsFacebook} from 'react-icons/bs'
import { MdDarkMode, MdOutlineDarkMode} from 'react-icons/md'

export default function Login(props) {
    return (
        <div className='content'>
            <div className='darkMode'>
                <button className='luas'>
                <MdDarkMode/>

                </button>
                <button className='luas'>
                <MdOutlineDarkMode/>
                    
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
                            <input type='text' className='input-email'></input>
                            <hr className='hr-email'></hr>
                        </div>

                        <div className='senha'>
                            <h3>Senha</h3>
                            <input type='password' className='input-senha'></input>
                            <hr className='hr-senha'></hr>
                            <a href='' className='esqueceu'>Esqueceu a senha?</a>
                        </div>

                        <div className='entrar'>
                            <div className='social'>
                                    <a href=''className='redonda'>
                                        <BsGoogle/>
                                    </a>
                                    <a href='' className='redonda'>
                                        <BsFacebook/>                                
                                    </a>
                            </div>
                                <a href='' className='a-entrar'>
                                    <h2>Entrar</h2>
                                </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}