import { INTEGER, Sequelize } from 'sequelize';
import { Sequelize, Model, DataTypes } from 'sequelize';




const sequelize = new Sequelize('snakes-and-ladders', 'root', '', {
    host: 'localhost',
    dialect: 'mysql '
});



// example to create table in the database

const userSchema = connection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    age: {
        type:DataTypes.INTEGER,


    },
    email: {
        type: DataTypes.STRING(50)
    },
    name: {
        type: DataTypes.STRING(50)
    },
    password: {
        type: DataTypes.STRING(100)
    }
});
connection.sync()


// example to create table in the database

