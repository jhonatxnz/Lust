import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro'
import Home from './components/Home/Home'
import useAuth from "./context/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Login />;
  };

export default function Rotas() {
    return (
        <Routes>
            <Route exact path="/home" element={<Private Item={Home} />} />
            <Route exact path='/'element={<Cadastro/>}/>
            <Route exact path='/cadastro'element={<Cadastro/>}/>
            <Route path='/login' element={<Login />} />
            <Route path="*" to='/' />
        </Routes>
    )
}