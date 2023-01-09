const axios = require('axios')
const { Pokemon, Types } = require('../db');
//----------------------------------------------------------------------------------------------
// const { Router } = require('express');
// const rolo = Router()

// rolo.get('/prueba', async (req, res)=>{
//   const algo=getApiInfo()
//   res.send("asas")
// })




const getApiInfo = async () => {
  try {
    const api = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
    await Promise.all(api.data.results.map( async (el)=>{
      const result = await axios.get(el.url);//.then(response=response.data).then(data=>{pokemon:{}})
      const data = result.data;
      const pokemon={
        id:data.id,
        name:data.name,
        createdInDB: false,
        weight:data.weight,
        height:data.height,
        hp:data['stats'][0]['base_stat'],
        speed:data['stats'][5]['base_stat'],
        attack:data['stats'][1]['base_stat'],
        defense:data['stats'][2]['base_stat'],
        image: data['sprites']['other']['dream_world']['front_default'],
      };//no poner la propiedad types o va a chocar con la relacion de la base de datos
      const types = data.types.map(t => t.type.name);
      const newTypes = await Types.findAll({where: {name: types}})
      const newPokemon = await Pokemon.create(pokemon);
      await newPokemon.addTypes(newTypes);//addtypes es un metodo creado por squalize
    }));  
  } catch (error) {
    console.log(error);
  }
  };



//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------


const getApiTypes = async ()=>{
  try {
    await axios.get('https://pokeapi.co/api/v2/type')
    .then(res => res.data.results.map(async (el) =>{
    Types.findOrCreate({
            where:{
                name: el.name,
                },
                order: ['name']
            })
        }));
  } catch (error) {
    res.send(error)
  }

}

module.exports = {
  getApiInfo,
  getApiTypes
};    
//---------------------------------------------------------------------------------------------------------------------------------------

  /* 
  
  
  
  
  
  
  
  
  
  
  
  const getInfoApiByID = async (id)=>{
    const pokeId=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result=await pokeId.data;
    const img = result.sprites.other.home.front_default;
    const pokemon={
        id:result['id'],
        name:result['name'],
        weight:result['weight'],
        height:result['height'],
        life:result['stats'][0]['base_stat'],
        attack:result['stats'][1]['base_stat'],
        defense:result['stats'][2]['base_stat'],
        speed:result['stats'][5]['base_stat'],
        image:img,
        type:result['types'][0]['type']['name']
      };
    return pokemon;
  } */