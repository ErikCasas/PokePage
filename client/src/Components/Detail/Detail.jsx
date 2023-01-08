import { useDispatch, useSelector } from "react-redux";
import { deletePokemon, getPokemonDetail, setDetail } from "../../Redux/actions";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Message from "../Message/Message";
import './Detail.css'
import { num, Peso, Porcentaje } from "./help";
export default function Detail(props) {
    const id = props.match.params.id;
    // console.log('este es el id->',id);

    const history = useHistory()
    const dispatch = useDispatch();
    const Details = useSelector(state => state.details);

    //handlers
    function deleteButton(e){
        e.preventDefault();
        dispatch(deletePokemon(id))
        alert('DELETE')
        setTimeout(()=>{
            history.push('/pokemons')
        },500)
    }

    //componentWillMount
    useEffect(() => {
        dispatch(getPokemonDetail(id))
    }, [dispatch, id])


    useEffect(()=>{
        return()=>{
            dispatch(setDetail())
        }
    },[])
    // console.log('este es el detail-->',Details);

    return (
        <div className="">
            {Details.name !== "SequelizeDatabaseError" ? (
                <div className="container">
                    <div className='header-main-pokemon'>
                        <span className='number-pokemon'>#{Details.id}</span>
                        <div className='container-img-pokemon'>
                            <img
                                src={Details.image}
                                alt={`Pokemon ${Details.name}`}
                            />
                        </div>
                        <div className='container-info-pokemon'>
                            <h1>{Details.name}</h1>
                            <div className='card-types info-pokemon-type'>
                                {Details.types?.map((el) => (<span key={el.name} className={el.name}>{el.name}</span>))}
                            </div>
                            <div className='info-pokemon'>
                                <div className='group-info'>
                                    <p>Height</p>
                                    <span>{num(Details.height)} M</span>
                                </div>
                                <div className='group-info'>
                                    <p>weight</p>
                                    <span>{Peso(Details.weight)}KG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-stats'>
                        <h1>stats</h1>
                        <div className='stats'>
                            <div className='stat-group'>
                                <span>Hp</span>
                                <div className='progress-bar'>
                                    <div className="progress"  style={{width: Porcentaje(Details.hp)}}></div>
                                </div>
                                <span className='counter-stat'>
                                    {Details.hp}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Attack</span>
                                <div className='progress-bar'>
                                    <div className="progress" style={{width: Porcentaje(Details.attack)}}></div>
                                </div>
                                <span className='counter-stat'>
                                    {Details.attack}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Defense</span>
                                <div className='progress-bar'>
                                    <div className="progress"  style={{width: Porcentaje(Details.defense)}}></div>
                                </div>
                                <span className='counter-stat'>
                                    {Details.defense}
                                </span>
                            </div>
                            {/* <div className='stat-group'>
                            <span>Special Attack</span>
                            <div className='progress-bar'></div>
                            <span className='counter-stat'>
                                {pokemon.stats[3].base_stat}
                            </span>
                        </div>
                        <div className='stat-group'>
                            <span>Special Defense</span>
                            <div className='progress-bar'></div>
                            <span className='counter-stat'>
                                {pokemon.stats[4].base_stat}
                            </span>
                        </div> */}
                            <div className='stat-group'>
                                <span>Speed</span>
                                <div className='progress-bar'>
                                    <div className="progress"  style={{width: Porcentaje(Details.speed)}}></div>
                                </div>
                                <span className='counter-stat'>
                                    {Details.speed}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="btns">
                        <Link to={'/pokemons'}>
                            <button>back</button>
                        </Link>
                        <button onClick={(e)=>deleteButton(e)}>Delete </button>
                    </div>
                </div>
            ) : <Message />}
        </div>
    )
}





{/* <div>
<Link to={'/pokemons'}>
    <button>return</button>
</Link>
<h2> This is {Details.name}</h2>
<img src={Details.image} alt="Avenged Sevenfold<3" />
<h4>hp: {Details.hp}</h4>
<h4>attack: {Details.attack}</h4>
<h4>defense: {Details.defense}</h4>
<h4>speed: {Details.speed}</h4>
<h4>height: {Details.height}</h4>
<h4>weight: {Details.weight}</h4>
{Details.createdInDB?(
    <h4>official: this pokemon is official</h4>
):<h4>official: this pokemon is not official</h4>}
{Details.types?.map(el=><h4 key={el.name}>{el.name}</h4>)}

</div> */}


















// export default class Detail extends React.Component{
//     constructor(props){
//         super(props)

//     }

//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }

// }