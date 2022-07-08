import React, { Fragment, useState, useEffect } from "react";
import Menu from '../Menu/Menu'
import Card from '../Card/Card'
import Categoria from '../Categoria/Categoria'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import './Home.css';


export default function Home(props) {

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
        <div className="content">
            <Menu />
            <div className="meio">
            <h1 className="h1Alinhado">Novas promoções</h1>
            
                <div className="cards-promo">
                    
                    <div className="cards">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <h1 className="h1Alinhado">Categorias mais visitadas</h1>

                <div className="cards-categorias">
                    <div className="cards2">
                        <Categoria/>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}