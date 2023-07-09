import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;


const sequelize = new Sequelize('snakes-and-ladders', 'root3', '123456789', {
    host: 'localhost',
    port:8081,
    dialect: 'mysql'
});
sequelize.sync();

export { sequelize,DataTypes }




