import { sequelize ,DataTypes} from '../models/config.js';

const boardSchema = sequelize.define('board', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50)
    },
    image:{
        type: DataTypes.STRING(255)
    }
  
});
export default boardSchema;


// sequelize.sync().then(() => {
//     console.log('Models synchronized with the database');
//   })
//   .catch((err) => {
//     console.error('Error synchronizing models:', err);
//   });