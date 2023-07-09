import pkg from 'sequelize';
const { Sequelize, DataTypes} = pkg;


const sequelize = new Sequelize('snakes-and-ladders', 'root', '1234567890!@#$%^&*(', {
    host: 'localhost',
    dialect: 'mysql'
});

// module.exports = sequelize;
export { sequelize,DataTypes }





