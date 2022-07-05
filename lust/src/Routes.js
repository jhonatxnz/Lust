import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro'


export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/cadastro'element={<Cadastro/>}/>
            <Route path='/login' element={<Login />} />
            <Route path="*" to='/' />
        </Routes>
    )
}