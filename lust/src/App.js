import React from "react";
import Rotas from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
          <Rotas />
                    {/*digite /cadastro na url  */}
        </BrowserRouter>
    );
};

export default App;