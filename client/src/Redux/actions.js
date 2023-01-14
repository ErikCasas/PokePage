
//------------------------------------------------------------------------------------------------------------ --------------------------
export const getAllPokemons = () =>{
    return async function(dispatch){
        await fetch("https://pokepage-production-def0.up.railway.app/pokemons/")
        .then((response)=>response.json())        
        .then((data)=>dispatch({
            type: 'GET_ALL_POKEMONS',
            payload: data
        }))
        .catch((err) => console.log('este es el error -->',err));
    };
};
//------------------------------------------------------------------------------------------------------------ --------------------------

export const getAllTypes = () =>{
    return async function(dispatch){
        await fetch("https://pokepage-production-def0.up.railway.app/pokemons/types")
        .then((response)=>response.json())
        .then((data)=>dispatch({
            type: 'GET_ALL_TYPES',
            payload: data
        }))
        .catch((err)=>console.log('este es el error -->',err));
    };
};

//--------------------------------------------------------------------------------------------------------------------------------------

export const getPokemonByName = (name)=>{
    return async function(dispatch){
        try {
            await fetch(`https://pokepage-production-def0.up.railway.app/pokemons/?name=${name}`)
            .then((response)=>response.json())
            .then((data)=>dispatch({
                type:'GET_POKEMON_BY_NAME',
                payload: data
            })) 
        } catch (error) {
            alert('pokemon not found')            
        }

    };
};

//--------------------------------------------------------------------------------------------------------------------------------------

export const getPokemonDetail = (id) =>{
    return async function(dispatch){
        await fetch(`https://pokepage-production-def0.up.railway.app/pokemons/${id}`)
        .then((response)=>response.json())
        .then((data)=>dispatch({
            type:'GET_POKEMON_DETAIL',
            payload:data
        }));
    };
};
//------------------------------------------------------------------------------------------------------------ --------------------------

export const postPokemon = (payload) =>{
            return async function(dispatch){
        await fetch("https://pokepage-production-def0.up.railway.app/pokemons",payload);
        return dispatch({
            type:'CREATE_POKEMON'
        });
    };
};

//------------------------------------------------------------------------------------------------------------ --------------------------

export const deletePokemon = (id) =>{
    return async function (dispatch){
        await fetch(`https://pokepage-production-def0.up.railway.app/pokemons/${id}`, {method: 'DELETE'})
        return dispatch({
            type: 'DELETE_POKEMON'
        })
    }
}

//------------------------------------------------------------------------------------------------------------ --------------------------

export const typeFilter = (payload) =>{
        return {
            type: 'FILTER_POKES_BY_TYPE',
            payload
    };
};

//------------------------------------------------------------------------------------------------------------ --------------------------

export const filterByCreated = (payload) =>{
    return{
        type: 'FILTER_POKES_BY_CREATED',
        payload
    };
};

//------------------------------------------------------------------------------------------------------------ --------------------------

export const orderByName = (payload) =>{
    return{
        type:'ORDER_BY_NAME',
        payload
    };
};

//------------------------------------------------------------------------------------------------------------ --------------------------

export const orderByAttack = (payload) =>{
    return{
        type:'ORDER_BY_ATTACK',
        payload
    };
};

//------------------------------------------------------------------------------------------------------------ --------------------------

export const orderByDefense = (payload) =>{
    return{
        type:'ORDER_BY_DEFENSE',
        payload
    };
};

//------------------------------------------------------------------------------------------------------------ --------------------------

export const setLoader = () =>{
    return{
        type:'SET_LOADER_TRUE'
    };
};

//------------------------------------------------------------------------------------------------------------ --------------------------

export const setDetail = () =>{
    return{
        type:'SET_DETAIL'
    }
}