'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ride extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ride.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    captain_id: {
      type:DataTypes.INTEGER,
    },
    pickup: {
      type:DataTypes.STRING,
      allowNull:false
    },
    destination: {
      type:DataTypes.STRING,
      allowNull:false
    },
    fare: {
      type:DataTypes.FLOAT
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['pending', 'accepted', "ongoing", 'completed', 'cancelled'],
      defaultValue: 'pending'
    },
    duration: {
      type:DataTypes.INTEGER,
    },
    distance: {
      type:DataTypes.FLOAT
    },
    payment_id: {
      type:DataTypes.STRING,
    },
    order_id:  {
      type:DataTypes.STRING,
    },
    signature:  {
      type:DataTypes.STRING,
    },
    otp:{
      type:DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Ride',
  });
  return Ride;
};