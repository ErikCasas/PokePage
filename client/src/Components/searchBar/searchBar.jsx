import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../Redux/actions"; 
import { Link } from "react-router-dom";
import './searchBar.css'

export default function SearchBar({setPage}){


    const Dispatch = useDispatch();
    const [Name,SetName] = useState('');

    
    function heandlerInput(e){
        e.preventDefault()
        SetName(e.target.value)
        // console.log(Name);
    }
    function handlerButton(e){
        if(Name===''){alert('nothing to look for')}
        else{e.preventDefault()
            Dispatch(getPokemonByName(Name))
            SetName('')
            setPage()
        }
    }

    return(

        <header className="container-search" >
            <Link to='/' className='logo'>
				<img
				src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
				alt='Logo Pokedex'
				/>
			</Link>

            <form onChange={(e)=>heandlerInput(e)}>
                <div className='form-group'>
                    {/*esta etiqueta me pemite añadir un sistema de coordenadas para con el path hacer el dibujo */ }
                    <svg 
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-search'
						>
						<path d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/>{/* tan solo estoy dibujando */}
					</svg>
                    <input type="text" placeholder="search..." onChange={(e)=>{console.log('ignorar')}}  value={Name} required="required" />
                    <button type="submit" onClick={(e)=>handlerButton(e)} className='btn-search'>search</button>

                </div>
            </form>

                <Link to={'/create'}>
                    <button className="btn-create">Create ur pokemon</button>
                </Link>
        </header>
    )
}



