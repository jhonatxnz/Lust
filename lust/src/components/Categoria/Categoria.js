import React, { Fragment, useState, useEffect } from "react";
import './Categoria.css';


export default function Categoria4(props) {
    return (
        <div className="categoria">

            <div className="grid1">
                <a href="" className="aCategoria" id="cat1">
                </a>
                <a className="titleCat" href=""><strong>Moda</strong></a>

            </div>
            <div className="grid2">
                <a href="" className="aCategoria" id="cat2">
                    <img className="imgBtn" src=""></img>
                </a>
                <a className="titleCat" href=""><strong>Desktops</strong></a>
            </div>
            <div className="grid3">
                <a href="" className="aCategoria" id="cat3">
                    <img className="imgBtn" src=""></img>
                </a>
                <a className="titleCat" href=""><strong>Dispositivos móveis</strong></a>

            </div>
        </div>
    )
}