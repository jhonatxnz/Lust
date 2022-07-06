import React, { Fragment, useState, useEffect } from "react";
import Menu from '../Menu/Menu'
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

        </div>
    )
}