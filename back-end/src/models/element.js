import { sequelize ,DataTypes} from '../models/config.js';


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
export default elementSchema;

// sequelize.sync().then(() => {
//     console.log('Models synchronized with the database');
//   })
//   .catch((err) => {
//     console.error('Error synchronizing models:', err);
//   });