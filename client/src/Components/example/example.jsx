import React from "react";
import './example.css'
import pika2 from '../../image/pika.gif'



export default function Example({name,id,image,hp,attack,defense,speed,height,weight,types}){
    while(!image){
        image=pika2
    }
    return(
        <div className="poke-card">
        <div >{name}</div>
        <div  className="img-container">
            <img  className="poke-img" src={image}/>
        </div>
        <div >N° {id+1}</div>
        {types[0]&&<div className={`poke-types${types[0]}`}>{types[0]}</div>}
        {types[1]&&<div className={`poke-types${types[1]}`}>{types[1]}</div>}
        
        <div className="poke-stats">hp: <p>{hp}</p></div>
        <div className="poke-stats">attack: <p>{attack}</p></div>
        <div className="poke-stats">defense: <p>{defense}</p></div>
        <div className="poke-stats">speed: <p>{speed}</p></div>
        <div className="poke-stats">height: <p>{height}</p></div>
        <div className="poke-stats">weight: <p>{weight}</p></div>
    </div>
    )
}