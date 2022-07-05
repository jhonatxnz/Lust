import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import './Home.css';

export default function Home(props) {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => [signout(), navigate("/login")]}> 
                Sair
            </button>
        </div>
    )
}