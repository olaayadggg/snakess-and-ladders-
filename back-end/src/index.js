// import { Sequelize } from "sequelize";
// import userSchema from "./models/user.js";
// import elementSchema from "./models/element.js";
// import boardSchema from "./models/board.js";
// import gameSchema from "./models/game.js";
//
// Sequelize.sync().then(() => {
//     console.log('Models synchronized with the database');
//   })
//   .catch((err) => {
//     console.error('Error synchronizing models:', err);
//   });
//

    import express from "express";

    const app = express();

    import gameRouter from './routes/routes.controlles'; // Adjust the path based on your file structure

    app.use(express.json());

    // Use the gameRouter middleware for the /game route
    app.use('/game', gameRouter);

    // ... other routes and middleware ...

    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });

