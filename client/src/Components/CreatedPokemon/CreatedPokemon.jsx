import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllTypes, postPokemon } from "../../Redux/actions";
import './CreatedPokemon.css'
import { validate } from "./validate";
import pika2 from '../../image/pika2.gif'
import Example from "../example/example";
import Default from '../../image/Default.png'

//todo lo comentado en esta pagina es debido a que gracias al boton de tipo submit, puedo agregar una propiedad de HTML que me evita
//hacer validaciones de la forma como lo estaba haciendo y simplemente no deja enviar hasta que los campos requeridos esten llenos :D

export default function Created(){

    const dispatch = useDispatch()

    const types = useSelector(state=>state.types)
    const pokemons = useSelector(state=>state.allPokemons)
    const id = pokemons.length  
    console.log('este es el id',id);


    const names = pokemons.map(e=>e.name)
    
    
    //componentWillMount
    useEffect(()=>{
        dispatch(getAllTypes())
    },[dispatch]);
    
    
    const history = useHistory();//para que cuando se haga la creación del pokemon, te envie a la pag inicial
    const [disabled, setDisabled] = useState(false);//habilitación del botón 
    const [error,setError]=useState({})//manejador de errores
    const [info, setInfo] = useState({//los datos que puedo recivir 
        name: '',
        hp: '',
        defense: '',
        attack: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        types: []
    })
    
    // console.log(info.types);
    // console.log(info)
    
    //Component willUpdate en donde dependiendo si cumple o no lo que pido, va a habilitar el botón
    useEffect(()=>{
        info.types.length>2||info.types.length===0||names.includes(info.name)?setDisabled(true):setDisabled(false);
    },[names,info.name,info.types.length]);
    
    //Heandlers
    function heandlerChangeInfo(e){
    setInfo({
        ...info,
        [e.target.name]:e.target.value
    })
    setError(
        validate({//validamos los errores
          ...info,
          [e.target.name]: e.target.value,
        })
      );
    }

function handlerChekBox(e){
    if(e.target.checked){//agregar al array de types
    // console.log(e.target.cheked)
    // console.log(e.target.value)
    setInfo({
        ...info,
        types: [...info.types, e.target.value]
    })                         
    }
    if(!e.target.checked){//eliminar del array de types
        info.types.splice(info.types.indexOf(e.target.value), 1);
        setInfo({
            ...info//le pasamos solo info ya que estamos eliminando 
      })
    }
}

console.log('estos son los nombre--->',names);
console.log('y este es info.name--->',info.name);


function handlerSubmit(e){                                           
    if(info.image==='')info.image = Default  //si no hay una imagen, dejo una por defecto
    e.preventDefault();
    dispatch(postPokemon({  //debido a que uso fetch, debo especificar el tipo de petición en un obj
        method:'POST',
        body:JSON.stringify(info),
        headers:{
        'Content-Type':'application/json'
        }
    }))
    setInfo({
        name: '',
        hp: "",
        defense: "",
        attack: "",
        speed: "",
        height: "",
        weight: "",
        image: '',
        types: []
    })
    alert('New Pokemon')
    setTimeout(()=>{
        history.push('/pokemons')
    },1000)
};
//es obvio que es una función validadora


    return(
        <div className="all">
            <div className="formulario">
                <div className="titulo">
                <Link to={'/pokemons'} >    
                    <h1>Create your pokemon </h1>
                </Link>
                    <img src={pika2} alt="piko" />
                <Link to={'/pokemons'} >    
                    <button>back</button></Link>

                </div>
                <form className="form" onSubmit={(e)=>{handlerSubmit(e)}}>
                        <div className="input-name">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" value={info.name} onChange={heandlerChangeInfo} required="required"/>
                            {names.includes(info.name)?(
                                <span>este pokemon ya existe</span>
                            ):null}
                            {error.name&&(<span>{error.name}</span>)}

                        </div>
                    <div className="data_1">
                        <div>
                            <label htmlFor="hp">hp:</label>
                            <input type="range" name="hp" id="hp" min='0' max ='250'value={info.hp} onChange={heandlerChangeInfo} required="required"/>
                            <span>{info.hp}</span>
                            {error.hp&&(<span>{error.hp}</span>)}
                        </div>
                        <div>
                            <label htmlFor="defense">Defense: </label>
                            <input type="range" min='0' max ='250' name="defense" id="defense" value={info.defense} onChange={heandlerChangeInfo} required="required"/>
                            <span>{info.defense}</span>
                            {error.defense&&(<span>{error.defense}</span>)}

                        </div>
                        <div>
                            <label htmlFor="attack">Attack: </label>
                            <input type="range" min='0' max ='250' name="attack" id="attack" value={info.attack} onChange={heandlerChangeInfo} required="required"/>
                            <span>{info.attack}</span>
                            {error.attack&&(<span>{error.attack}</span>)}

                        </div>
                        <div>
                            <label htmlFor="speed">Speed: </label>
                            <input type="range" min='0' max ='250' name="speed" id="speed" value={info.speed} onChange={heandlerChangeInfo} required="required"/>
                            <span>{info.speed}</span>
                            {error.speed&&(<span>{error.speed}</span>)}

                        </div>
                        <div>
                            <label htmlFor="height">Height: </label>
                            <input type="range" min='0' max ='250' name="height" id="height" value={info.height} onChange={heandlerChangeInfo} required="required"/>
                            <span>{info.height}</span>
                            {error.height&&(<span>{error.height}</span>)}

                        </div>
                        <div>
                            <label htmlFor="weight">Weight: </label>
                            <input type="range" min='0' max ='1000' name="weight" id="weight" value={info.weight} onChange={heandlerChangeInfo} required="required"/>
                            <span>{info.weight}</span>
                            {error.weight&&(<span>{error.weight}</span>)}

                        </div>
                    </div>
                        <div className="input-img">
                            <label htmlFor="image">Image: </label>
                            <input type="text" name="image" value={info.image} onChange={heandlerChangeInfo}/>
                            {error.image&&(<span>{error.image}</span>)}
                        </div>
                    <div className="data_2">
                        <span htmlFor="types">Types:</span>
                        <div className="types">
                            {types?.map(el=>{
                                return(
                                    <div key={el.name} >
                                        <label htmlFor="types">{el.name}</label>
                                        <input type="checkbox" name={el.name} value={el.name} className={el.name} onChange={handlerChekBox}/>
                                    </div>
                                )
                            })}
                        </div>
                            {info.types.length>2||info.types.length===0?(
                                <h3> max two!</h3>
                            ):null}
                    </div>    
                        <div className="btn-crt">
                            <button type="submit" disabled={disabled} >CREATE</button>
                        </div>
                </form>   
            </div>
            <Example
            image = {info.image}
            id = {id}
            name = {info.name}
            types = {info.types}
            hp = {info.hp}
            attack =  {info.attack}
            defense = {info.defense}
            speed = {info.speed}
            height = {info.height}
            weight = {info.weight}
            />

        </div>
    )
}











