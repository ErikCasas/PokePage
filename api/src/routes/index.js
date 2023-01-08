const { Router } = require('express');
const  { getType }  = require('../Controllers/PokeController')
const PokemonRouter  = require('../routes/PokemonRouter')


const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use('/pokemons/types',getType);//traer tipos

router.use('/pokemons',PokemonRouter);// traer pokemons

//Queda pendiente las verofocaciones ;)

//get
//post
//put
//delete




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;    

