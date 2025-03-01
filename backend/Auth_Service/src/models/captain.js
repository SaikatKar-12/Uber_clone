'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const {SALT}= require('../config/serverConfig');

module.exports = (sequelize, DataTypes) => {
  class Captain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Captain.init({
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    } ,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100]
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    v_color:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    v_plate:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    v_capacity: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    v_model:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    socketId: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Captain',
  });
  Captain.beforeCreate((captain)=>{
    const encryptedPassword = bcrypt.hashSync(captain.password,SALT);
    captain.password=encryptedPassword;
  });

  return Captain;
};