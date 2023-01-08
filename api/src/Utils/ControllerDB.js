const { Pokemon, Types } = require('../db');
const { getApiInfo, getApiTypes } = require('./ContollerApi')

const getInfoByDb = async ()=>{
  const exist = await Types.findAll();//cambiar por un length
  if( !exist.length ) await getApiTypes();
    const exist2 = await Pokemon.findAll();//cambiar por un length
    if( !exist2.length ) await  getApiInfo();
    const results = await Pokemon.findAll({
        include:[
            {
            model: Types,
            attributes:['name'],
            through:{
              attributes: [],
          },
          }
        ],
        order:['id']//ordena la lista
    });
    return results;
};

//_______________________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________________

const getTypesDb = async()=>{
  const exist = await Types.findAll();//cambiar por un length
    if( !exist.length ) await getApiTypes();
    const types = await Types.findAll();
    return types
}

//_______________________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________________

const getIdByDb = async(id)=>{
    return await Pokemon.findByPk(id,{
      include:[
          {
          model: Types,
          attributes:['name'],
          through:{
            attributes: [],
        },
        }
      ]
  });
}

//_______________________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________________
const getNameByDb = async(pokeName)=>{
  return await Pokemon.findOne(
    {where:{name:pokeName},
    include:[
    {
    model: Types,
    attributes:['name'],
    through:{
      attributes: [],
  },
}]})};

//_______________________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________________
const createdInDB = async(name, hp, speed, height, attack, weight, defense, types, image)=>{
  const pokemon = name.toLowerCase()
    const exist = await Pokemon.findOne({
        where:{ name:pokemon}
    });
    if(exist) throw Error('Pokemon existente');
    const id = await Pokemon.max('id')
    const newPokemon = {name,hp,speed,height,attack,weight,defense,types,image, id:(id+1)}
    const Pokemonc = await Pokemon.create(newPokemon);  
    const typesDb = await Types.findAll({
        where: { name:types }});
    await Pokemonc.addTypes(typesDb);
};



const DeleteInDb = async(id) =>{
  const pokemon =  await Pokemon.findByPk(id)
  await pokemon.destroy()
}


module.exports = {
    getIdByDb,
    getInfoByDb,
    getTypesDb,
    getNameByDb,
    createdInDB,
    DeleteInDb
}


/*       const exist = await Pokemon.findOne({where: {id: 1}})
      if(!exist) */