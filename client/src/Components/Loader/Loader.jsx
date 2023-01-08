import React from "react";
import { Dna, MagnifyingGlass } from 'react-loader-spinner'
import './Loader.css';


export default function Loader(){
    return(
        <div className="FondLanding">
            <div className="text">
                <h1>Loading...</h1>
            </div>
            <div className="queLePasaALupita">
            <MagnifyingGlass
                  visible={true}
                  height="124"
                  width="124"
                  ariaLabel="MagnifyingGlass-loading"
                  wrapperStyle={{}}
                  wrapperClass="MagnifyingGlass-wrapper"
                  glassColor = '#c0efff'
                  color = '#e15b64'
            />
            </div>
            <div className="loading">
            <Dna
                visible={true}
                height="260"
                width="260"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            </div>
        </div>
    )
}