import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

class LandingPage extends React.Component{
    render(){
        return(
            <div className='Fond'>
                <div className="title">
                    <h1>POKEPAGE</h1>
                </div>
                <div className="button">
                <Link to={'/pokemons'}>
                    <button> LET´S GO!!</button> 
                </Link>   
                </div>
            </div>
        );
    };
};
export default LandingPage
