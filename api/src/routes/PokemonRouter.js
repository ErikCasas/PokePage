const { Router } = require('express');
const { getPokemons, getById, createPokemon, deletePokemons} = require('../Controllers/PokeController');
const { validatePokemon } = require("../middlewares");
const PokemonRouter = Router();


PokemonRouter.delete('/:id',deletePokemons)

PokemonRouter.get('/:id',getById); //traer por ID

PokemonRouter.post('/',validatePokemon, createPokemon); //crear un pokemon

PokemonRouter.get('/',getPokemons); //traer todos




module.exports = PokemonRouter;
