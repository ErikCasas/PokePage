import React from "react";
import { Link } from "react-router-dom";
import './Cards.css'

export default function Card({ image, name, id, type }) {
    return (
       <Link to={'/pokemons/'+id} className='card-pokemon'>
        <div className="card-img">
          <img src={image} alt={`Pokemon ${name}`} />
        </div>
        <div className="card-info">
          <span className="pokemon-id">N° {id}</span>
          <h3>{name}</h3>
          <div className="card-types">
            {type?.map((el)=>(<span key={el.name} className={el.name}>{el.name}</span>))}
          </div>
        </div>
      </Link>
    );
}



// {type.length >= 2 ? (
//   <div className="types">
//     <h3 className="cardType">{type[0]}</h3>
//     <h3 className="cardType">{type[1]}</h3>
//   </div>
//     ) : (
//       <div className="types">
//         <h3 className="cardType">{type[0]}</h3>
//       </div>
//     ) 
//   }  
