import React from "react";
import Rotas from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context/auth";
import './App.css'

const App = () => {
    return (

        <BrowserRouter>
            <AuthProvider>
                <Rotas />
                {/*digite /cadastro na url  */}
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;