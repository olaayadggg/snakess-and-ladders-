import { sequelize ,DataTypes} from './config.js';



const cocoSchema = sequelize.define('coco', {
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
sequelize.sync().then(() => {
    console.log('Models synchronized with the database');
  })
  .catch((err) => {
    console.error('Error synchronizing models:', err);
  });