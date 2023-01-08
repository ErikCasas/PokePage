const { getInfoByDb, DeleteInDb } = require('../Utils/ControllerDB')
const { getIdByDb, getTypesDb, getNameByDb, createdInDB } = require('../Utils/ControllerDB')
const { Types, Pokemon } = require('../db')


//---------------------------------------------------------------------------------------------------------------------------------------
const getPokemons = async (req,res)=>{
    try {   
        const { name } = req.query
        if (!name){
            const allPokemos = await getInfoByDb();
            res.status(200).send(allPokemos);
        }else{
            const pokeName = name.toLowerCase()
            const pokemon = await getNameByDb(pokeName);
            res.status(200).send(pokemon)
        }
    } catch (error) {
        res.send(error); 
    }
}
//pikaCHU

//---------------------------------------------------------------------------------------------------------------------------------------
const getType = async (req,res)=> {
    try {
        const allTypes = await getTypesDb();
        res.send(allTypes);
    } catch (error) {
        res.send(error);
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------
//   
//hacer un cruce de la busqueda de los dos lados y retornar esa 
// 
const getById = async (req,res)=>{
    const { id } = req.params;
    try {
        const infoDb = await getIdByDb(id)
        if(infoDb)return res.status(200).send(infoDb)
        // throw new Error('Pokemon not found')
    } catch (error) {
        res.status(404).send(error)
    }
    
}

//---------------------------------------------------------------------------------------------------------------------------------------
const createPokemon = async (req, res)=>{
    const { name, hp, speed, height, attack, weight, defense, types, image} = req.body;
    
    try {
        const myCreation = createdInDB(name, hp, speed, height, attack, weight, defense, types, image);    
        res.send('todo copas mi so, en la buena')
    } catch (error) {
        res.send(error)
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------

const deletePokemons = async(req,res)=>{
    const { id } = req.params
    try {
        await DeleteInDb(id)
        res.send('viento')
    } catch (error) {
        console.log('este es ')
    }
}

// if (!image)image='https://upload.wikimedia.org/wikipedia/commons/1/10/H._P._Lovecraft%2C_June_1934.jpg';

module.exports = {
    getPokemons,
    getById,
    getType,
    createPokemon,
    deletePokemons
}
//---------------------------------------------------------------------------------------------------------------------------------------
//pendeinte a buscar en que carpeta dejar 
/* const getAllPokemons = async ()=>{
    const Apipokemons = await getApiInfo();
    const DbPokemons = await getInfoByDb();
    const allInfo=[...Apipokemons ,...DbPokemons]
    return allInfo
  }
 */