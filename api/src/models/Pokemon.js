const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hp: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: { 
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    speed: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: { 
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdInDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true 
    },

  }, { timestamps: false });
};

//   'www.pngplay.com/wp-content/uploads/10/Eevee-Pokemon-PNG-Images-HD.png'
// 'https://teepeek.com/wp-content/uploads/2019/05/shocked_pikachu_meme.jpg'
// 'https://custom-doodle.com/wp-content/uploads/doodle/infinity-surprised-pikachu-meme/infinity-surprised-pikachu-meme-doodle.gif'