import React from "react";
import poke404 from '../../image/poke404.png'
import { Link } from "react-router-dom";
import './Mesagger.css'

export default function Message(){
    return(
        <div className="container-mess">
            <div className="message">
            <h1>4</h1>
            <img src={poke404} alt="poke404" />
            <h1>4</h1>
            </div>
            <div className="infor">
                <span>Page not found </span>
                <Link to={'/pokemons'}>
                    <button>back</button>
                </Link>
            </div>
        </div>
    )
}