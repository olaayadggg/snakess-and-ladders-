
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import process from 'process';
import importModel from './importModel.js';
import config from '../config/config.json';

const configPath = path.join(__dirname, '..', 'config', 'config.json');
const env = process.env.NODE_ENV || 'development';
const config = config[env];
const basename = path.basename(__filename);
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const modelPath = path.join(__dirname, file);
    const model = importModel(modelPath)(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
