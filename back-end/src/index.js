import { Sequelize } from "sequelize";
import userSchema from "./models/user.js";
import elementSchema from "./models/element.js";
import boardSchema from "./models/board.js";
import gameSchema from "./models/game.js";

sequelize.sync().then(() => {
    console.log('Models synchronized with the database');
  })
  .catch((err) => {
    console.error('Error synchronizing models:', err);
  });

