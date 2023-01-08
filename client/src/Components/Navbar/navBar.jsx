import React from "react";
import { useState } from "react";
import './navBar.css'

export const NavBar = ({
    prevent,
    allTypes,
    handlerOrderByAttack,
    handlerOrderByDef,
    heandlerOrderByName,
    handlerFilterByCreated,
    handlerFilterByType}) =>{
    const [active, setActive] = useState(false)

    return(
        <React.Fragment>
            <div>
			<div className='container-filter containerNav'>
				<div className='icon-filter' onClick={() => setActive(!active)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
						/>
					</svg>
					<span>Filters</span>
				</div>
                <button onChange={(e)=>{prevent(e)}}>Reset</button>

			</div>



                <div   className={`container-filters ${active ? 'active' : ''} `}>
                    <div className="filter-by-type">
                        <span >Types</span>

                <select onChange={(e) => handlerFilterByType(e)}>
                <option value='all'>all types</option>
                {
					allTypes?.map(type=>(<option key={type.name} value = {type.name} >{type.name}</option>))
				}
                </select>

				<span >Order By Attack</span>
                <select onChange={handlerOrderByAttack}>
                <option value="inorder">no attack order</option>
                <option value="+atk">+atk</option>
                <option value="-atk">-atk</option>
                </select>

				<span >Order By Defense</span>
                <select onChange={handlerOrderByDef}>
                <option value="inorder">no defense order</option>
                <option value="+def">+def</option>
                <option value="-def">-def</option>
                </select>  

				<span >Alphabetical Order</span>

                <select onChange={heandlerOrderByName}>
                <option value="inorder">no alphabetical order</option>
                <option value="asc">a-z</option>
                <option value="dsc">z-a</option>
                </select>
                
				<span >bring from</span>
				
                <select onChange={handlerFilterByCreated}>
                <option value="all">ALL</option>
                <option value="API">API</option>
                <option value="DB">CREATED</option>
                </select>




                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}


































            /* <select onChange={handlerOrderByAttack}>
                <option value="inorder">no attack order</option>
                <option value="+atk">+atk</option>
                <option value="-atk">-atk</option>
                </select>

                <select onChange={handlerOrderByDef}>
                <option value="inorder">no defense order</option>
                <option value="+def">+def</option>
                <option value="-def">-def</option>
                </select>   

                <select onChange={heandlerOrderByName}>
                <option value="inorder">no alphabetical order</option>
                <option value="asc">a-z</option>
                <option value="dsc">z-a</option>
                </select>
                
                <select onChange={handlerFilterByCreated}>
                <option value="all">ALL</option>
                <option value="API">API</option>
                <option value="DB">CREATED</option>
                </select>

                <select onChange={(e) => handlerFilterByType(e)}>
                <option value='all'>all types</option>
                {
                    allTypes?.map(type=>(<option key={type.name} value = {type.name} >{type.name}</option>))
                    }
                </select>
          */