import { sequelize ,DataTypes} from '../models/config.js';


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
        type:DataTypes.STRING(50)
    },
    lastMove: {
        type: DataTypes.DOUBLE
    }
});
export default gameSchema;
// sequelize.sync().then(() => {
//     console.log('Models synchronized with the database');
//   })
//   .catch((err) => {
//     console.error('Error synchronizing models:', err);
//   });
