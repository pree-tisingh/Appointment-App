const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('User' ,{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
         type:Sequelize.STRING,
         allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
     },
     contact: {
        type: Sequelize.BIGINT, 
        allowNull: false,
        validate: {
          isNumeric: true, 
          len: [10, 15] 
        }
    },
     password:{
        type:Sequelize.STRING,
        allowNull:false
     }
});

module.exports = User;