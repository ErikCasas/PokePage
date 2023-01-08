import { filterByCreated, getAllPokemons, getAllTypes, orderByAttack, orderByDefense, orderByName, setLoader, typeFilter } from "../../Redux/actions";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginated from "../paginated/paginated";
import SearchBar from "../searchBar/searchBar";
import { NavBar } from "../Navbar/navBar";
import Loader from "../Loader/Loader";
import Card from '../Card/Card'
import './Home.css'
  
export default function Home (){
    
    //me traigo los estados de redux, rootreducer, graciar a la store
    const allPokemons = useSelector((state)=>state.allPokemons)//remplaza el mapStateToProps//nos traemos la info de los poke
    const allTypes = useSelector((state)=>state.types)
    const loading = useSelector((state)=>state.loader)
    const [order,setOrder] = useState('');
    
    const dispatch = useDispatch();

    //este es mi component DidMount pidiendo los datos iniciales una vez carga por primera vez la pag
    useEffect(()=>{//recive dos 'parametros', lo que hará y las dependencias
        dispatch(getAllPokemons())//remplaza el mapDispatchToprops
        dispatch(getAllTypes())
        return()=>{
            dispatch(setLoader())
        }
    },[dispatch])//se puede dejar sin el dispatch pero nelson
    //
    // aqui genero la logica para el paginado 
    const [pokemonsInPage, setPokomenosPerPage ] = useState(12);//cantidad de pokemons que quiero en la pagina
    const [currentPage,setCurrentPage] = useState(1); //arrancamos en la pagina 1
    const lastPokemon = currentPage*pokemonsInPage;//genero un indice 
    const firstPokemon = lastPokemon - pokemonsInPage;
    const renderPokemons = allPokemons.slice(firstPokemon,lastPokemon);//he extraido los indices de los pokemons y dependiendo de eso, lo acomodará 
    const Page = (pageNumber)  => {setCurrentPage(pageNumber)}//aqui es por donde me muevo
    
    console.log(order,setPokomenosPerPage);//solo los tengo porque me da inquietud el warning
    
//MANEJADORES DE EVENTOS :)

    function prevent(e){
        e.preventDefault();
        dispatch(getAllPokemons())
        dispatch(getAllTypes())  
    }
    
    function handlerFilterByType(e){
        e.preventDefault();
        dispatch(typeFilter(e.target.value))
        setCurrentPage(1)
    }
    
    function handlerFilterByCreated(e){
        e.preventDefault();
        dispatch(filterByCreated(e.target.value))
        setCurrentPage(1)
    };

    function heandlerOrderByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1)
    };
    
    function handlerOrderByAttack(e){
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1)
    }

    function handlerOrderByDef(e){
        e.preventDefault();
        dispatch(orderByDefense(e.target.value))
        setOrder(e.target.value);
        setCurrentPage(1)
    } 
    // {error&&<Message/>}
    return(
        <>
            {loading?(<Loader/>):
            <div>
                <SearchBar/>

                <NavBar
                prevent={prevent}
                handlerOrderByAttack={handlerOrderByAttack}
                handlerOrderByDef={handlerOrderByDef}
                heandlerOrderByName={heandlerOrderByName}
                handlerFilterByCreated={handlerFilterByCreated}
                handlerFilterByType={handlerFilterByType}
                allTypes={allTypes}/>
                
                <Paginated
                pokemonsInPage={pokemonsInPage} 
                allPokemons={allPokemons.length} 
                currentPage={Page} 
                page ={currentPage}/>

                <div className="container">
                    <div className="card-list-pokemon">
                   {renderPokemons?.map((el)=>{
                       return(
                           <Fragment key={el.id}>
                              <Card key={el.id} image={el.image} name={el.name} id={el.id} type={el.types}/>       
                        </Fragment>
                    );
                })}
                </div>
                </div>
            </div>
            }
            </>
        )
    }   
    