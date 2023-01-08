import React from "react";
import './paginated.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function Paginated({pokemonsInPage, allPokemons, currentPage, page}){
    const numPages = [];
    for (let index = 1; index <= Math.ceil(allPokemons/pokemonsInPage); index++) {//cantidad de paginados
        numPages.push(index)        
    };

    return(
        <div className="container-pag">
            <div className="children">
                    <button className="btnNav" style={page <= 1?{display:'none'}:{}} onClick={()=>currentPage(page-1)}><FontAwesomeIcon icon={faChevronLeft}/></button>
                        {numPages&&numPages.map(num=>{
                                return<button  className="page" key={num} onClick={()=>currentPage(num)}>{num}</button>
                            })}
                    <button className="btnNav" style={page>=numPages.length?{display:'none'}:{}} onClick={()=>currentPage(page+1)}><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
            <p> page {page} of {numPages.length}</p>
        </div>
    )
}