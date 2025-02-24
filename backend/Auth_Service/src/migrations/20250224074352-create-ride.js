'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      captain_id: {
        type: Sequelize.INTEGER,
      },
      pickup: {
        type: Sequelize.STRING,
        allowNull:false
      },
      destination: {
        type: Sequelize.STRING,
        allowNull:false
      },
      fare: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        defaultValue: 'pending',
        values: ['pending', 'accepted', "ongoing", 'completed', 'cancelled']
      },
      duration: {
        type: Sequelize.INTEGER
      },
      distance: {
        type: Sequelize.FLOAT
      },
      payment_id: {
        type: Sequelize.STRING
      },
      order_id: {
        type: Sequelize.STRING
      },
      signature: {
        type: Sequelize.STRING
      },
      otp:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rides');
  }
};