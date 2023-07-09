import { INTEGER, Sequelize } from 'sequelize';
import { Sequelize, Model, DataTypes } from 'sequelize';




const sequelize = new Sequelize('snakes-and-ladders', 'root', '1234567890!@#$%^&*(', {
    host: 'localhost',
    dialect: 'mysql '
});

const userSchema = connection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50)
    },
    password: {
        type: DataTypes.STRING(100)
    }
});
connection.sync()



