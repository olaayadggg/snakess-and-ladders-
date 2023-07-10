import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
// fyf

const sequelize = new Sequelize('snakes-and-ladders', 'root', 'Ahmedkhali12345@#$%', {
    host: 'localhost',
    dialect: 'mysql'
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
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }

});

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
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
});

const gameSchema = sequelize.define('game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    boardID: {
        type: DataTypes.INTEGER,

    },
    status: {
        type: DataTypes.STRING(50)
    },
    capacity: {
        type: DataTypes.INTEGER
    },
    currentUser: {
        type: DataTypes.INTEGER
    },
    lastMove: {
        type: DataTypes.DOUBLE
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
});


const User = sequelize.define('user', {
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
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
});




sequelize.sync().then(() => {
    console.log('Models synchronized with the database');
})
    .catch((err) => {
        console.error('Error synchronizing models:', err);
    });

boardSchema.hasMany(gameSchema, {
    foreignKey: 'BoardId'
});
gameSchema.belongsTo(boardSchema);
export { sequelize, DataTypes }