const initialState = {
    allPokemons: [],//tengo todos los pokemonsz
    Pokemons: [],//copia de los pokemons con los que trabajo para los filtros
    change:[],//otra copia porque se me estaban pisando las cosas y me estresé
    types: [],//¿tengo que decirlo?
    details: [],//para la ruta /:id
    loader: true
}

export function rootReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_POKEMONS':
            return{
                ...state,
                loader:false,
                allPokemons:[...action.payload],//distitnas copias para trabajar 
                Pokemons:[...action.payload],
                change:[...action.payload],
            };
        case 'GET_ALL_TYPES' :
            return {
                ...state,
                types: action.payload,
            }
        case 'FILTER_POKES_BY_TYPE':
            const pokemonsByType= state.Pokemons;
            const filteredTypes = action.payload === 'all' ?
                pokemonsByType : pokemonsByType.filter(poke => poke.types.map(t => t.name).includes(action.payload)) //|| poke.types.includes(action.payload));
            return{
                ...state,
                allPokemons: filteredTypes,
                change: [...filteredTypes]

            }
        case 'FILTER_POKES_BY_CREATED':
            const pokemonsByCreated= state.Pokemons;
            let filterCreated = action.payload==='DB'? 
            pokemonsByCreated.filter(el=>el.createdInDB===true):
            pokemonsByCreated.filter(el=>el.createdInDB===false);
            if(action.payload==='all')filterCreated = pokemonsByCreated;
            return{
                ...state,
                allPokemons:filterCreated
            }
        case 'ORDER_BY_NAME':
            let sortName;
            if (action.payload==="asc"){//a-z
            sortName = state.allPokemons.sort((a,b)=>{
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0
            }) }else if (action.payload==="dsc"){//z-a
            sortName = state.allPokemons.sort((a, b) => {
                if(a.name < b.name) return 1
                if(a.name > b.name) return -1
                return 0
            })}
            else {
                sortName=state.change.slice()//devuelvo la copia en donde tengo todo como al inicio 
            }
            return {
                ...state,
                allPokemons: sortName
            }
        case 'ORDER_BY_ATTACK':
            let sortAttack;
            if(action.payload==="+atk"){
                sortAttack=state.allPokemons.sort((a, b) => {
                    if(a.attack < b.attack) return 1
                    if(a.attack > b.attack) return -1
                    return 0
                })
                
            }else if(action.payload==="-atk"){
                sortAttack=state.allPokemons.sort((a,b)=>{
                    if(a.attack > b.attack) return 1
                    if(a.attack < b.attack) return -1
                    return 0
                })
            }else{
                sortAttack=state.change.slice()//devuelvo la copia en donde tengo todo como al inicio 
            }
            return{
                ...state,
                allPokemons:sortAttack
            }
        case 'ORDER_BY_DEFENSE':
            let sortDefense;
            if(action.payload==="+def"){
                sortDefense=state.allPokemons.sort((a, b) => {
                    if(a.defense < b.defense) return 1
                    if(a.defense > b.defense) return -1
                    return 0
                })
            }else if (action.payload==="-def"){
                sortDefense=state.allPokemons.sort((a,b)=>{
                    if(a.defense > b.defense) return 1
                    if(a.defense < b.defense) return -1
                    return 0
                })
            }else{
                sortDefense=state.change.slice()//devuelvo la copia en donde tengo todo como al inicio 
            }
            return{
                ...state,
                allPokemons: sortDefense
            }
        case 'GET_POKEMON_BY_NAME':
            if(!action.payload)alert()
            console.log(action.payload);
            return{
                ...state,
                allPokemons: [action.payload]//lo dejo dentro de un array debido al metodo slice que uso para el render 
            };
        case 'CREATE_POKEMON':
            return{
                ...state
            }
        case 'GET_POKEMON_DETAIL':
            // console.log('este es el action-->',action.payload)
            return {
                ...state,
                details:action.payload
            }
        case 'SET_LOADER_TRUE':
            return{
                ...state,
                loader:true
            }
        case 'DELETE_POKEMON':
            return{
                ...state
            }
        case 'SET_DETAIL':
            return{
                ...state,
                details:[]
            }
            



        default :
        return state    
    }

} 