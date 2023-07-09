import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;

const sequelize = new Sequelize('snakes-and-ladders', 'root', 'Tasbeh@42101174', {
    host: 'localhost',
    dialect: 'mysql'
});

// Example to create a table in the database

const userSchema = sequelize.define('user', {
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

sequelize.sync();

// Example to create another table in the database

const elementSchema = sequelize.define('element', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true


    },
    gameID: {
        type: DataTypes.INTEGER
    },
    from: {
        type: DataTypes.INTEGER
    },
    to: {
        type: DataTypes.INTEGER
    }
});



const boardSchema = sequelize.define('board', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50)
    },
    image: {
        type: DataTypes.STRING(255)
    }

});

const gameSchema = sequelize.define('game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    boardID: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING(50)
    },
    capacity: {
        type: DataTypes.INTEGER
    },
    currentUser: {
        type: DataTypes.STRING(50)
    },
    lastMove: {
        type: DataTypes.DOUBLE
    }
});