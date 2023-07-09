// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });

// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('snakes-and-ladders', 'root', '1234567890!@#$%^&*(', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// const Player = sequelize.define('player', {
//   name: Sequelize.STRING,
//   position: Sequelize.INTEGER
// });

// const Game = sequelize.define('game', {
//   state: Sequelize.JSON
// });

// sequelize.sync();

import express from 'express';

const app = express()

app.use(express.json())
import { Sequelize } from 'sequelize';


