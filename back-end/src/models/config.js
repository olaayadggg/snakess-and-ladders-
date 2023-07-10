import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;


const sequelize = new Sequelize('snakes-and-ladders', 'root', 'Ahmedkhali12345@#$%', {
    host: 'localhost',

    dialect: 'mysql'
});
sequelize.sync();

export { sequelize,DataTypes }




