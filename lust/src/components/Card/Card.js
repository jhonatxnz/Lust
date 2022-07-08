import React, { Fragment, useState, useEffect } from "react";
import { BsCartFill,BsFillStarFill } from 'react-icons/bs';
import './Card.css';


export default function Card(props) {

    return (
        <div className="card">
            <div className="img">
                <div className="absolute">
                    <button title="Adicionar ao carrinho">
                        <BsCartFill/>
                    </button>
                </div>
                
                <a href="#">
                    <img className="imgg" src="https://o.remove.bg/downloads/2b362f39-0038-43b2-91e6-8629eed38362/tenis-removebg-preview.png"></img>
                </a>
            <hr className="hrCard" />

            </div>
            <div className="info">
                <h2 className="title">
                    Tênis Nike Air Max Intrlk Lite Feminino
                </h2>
                <h2 className="descricao">Tênis super confortável, uso p/ academia</h2>
                <div className="stars">
                <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/>
                <p></p>
                </div>
            </div>
            <hr className="hrCard" />
            <div className="buy">
                <div>
                <p className="price">R$ 399,99<small> 3x</small></p>
                <h3 className="pricePromo">R$ 349,99</h3>
                </div>
                
                    <a href="#" className="aComprar">
                        <h4>Comprar</h4>
                    </a>
            </div>
        </div>
    )
}