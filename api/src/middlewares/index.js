const   validatePokemon = (req, res, next) => {
    let { name, types } = req.body;
if (!name) return res.status(400).json({ error: "missing name" })
if (!types) return res.status(400).json({ error: "missing types" })
next()
};
  
  module.exports = {
    validatePokemon
  };


