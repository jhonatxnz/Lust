import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import LoginRegister from "../../loginRegister";
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import './Cadastro.css';

export default function Cadastro(props) {
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

    const [email, setEmail] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const { signup } = useAuth();
  
    const handleSignup = () => {
      if (!email | !senhaConf | !senha) {
        setError("Preencha todos os campos");
        return;
      } else if (senha !== senhaConf) {
        setError("As senhas não são iguais");
        return;
      }
  
      const res = signup(email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      alert("Usuário cadatrado com sucesso!");
      navigate("/");
    };
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <LoginRegister />
                <div className='content'>
                    <div className='darkMode'>
                        <button className='luas' onClick={toggleTheme}>
                            <MdDarkMode />

                        </button>
                    </div>
                    <div className='center'>
                        <div className='form'>
                            <div className='inside-form'>
                                <div className='cadastro'>
                                    <h1>Cadastro</h1>
                                    <hr className='hr-cadastro'></hr>
                                </div>
                                <div className='nome'>
                                    <h3>Nome</h3>
                                    <input type='text' className='input-nome' maxLength='40'></input>
                                    <hr className='hr-nome'></hr>
                                </div>
                                <div className='email'>
                                    <h3>E-mail</h3>
                                    <input type='text' className='input-email' maxLength='30' value={email}
                                    onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
                                    <hr className='hr-email'></hr>
                                </div>
                                <div className='senha'>
                                    <h3>Senha</h3>
                                    <input type='password' className='input-senha' maxLength='16' value={senha}
                                    onChange={(e) => [setSenha(e.target.value), setError("")]}></input>
                                    <hr className='hr-senha'></hr>
                                </div>
                                <div className='senha'>
                                    <h3>Confirme a senha</h3>
                                    <input type='password' className='input-senha' maxLength='16'
                                    value={senhaConf}
                                    onChange={(e) => [setSenhaConf(e.target.value), setError("")]}></input>
                                    <hr className='hr-senha'></hr>
                                    <label>{error}</label>
                                </div>
                                <div className='idade'>
                                    <h3>Idade</h3>
                                    <input type='date' className='calendar'></input>
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
                                    <button href='' className='a-entrar' onClick={handleSignup}>
                                        <h3>Cadastrar</h3>
                                    </button>
                                    
                                </div>
                                <a href='/login' className="esqueceu">
                                        <p>Já tem conta?</p>
                                    </a>
                            </div>


                        </div>

                    </div>

                </div>
            </Fragment>
        </ThemeProvider>

    )
}