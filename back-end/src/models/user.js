import { sequelize ,DataTypes} from '../models/config.js';


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
export default userSchema;


