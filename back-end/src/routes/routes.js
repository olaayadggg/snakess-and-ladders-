import express from 'express';
import {createGame,deleteGame,game,deleteGameUser,login,getCapacityByGameId,createGameUser,register,getGameDetails,getElementById,updatePositions,startGame,getUserById} from './routes.controlles.js'; // Update the import statement

const router = express.Router();



router.get('/game', game);
router.delete('/gameuser/:id', deleteGameUser);
router.delete('/game/:id', deleteGame);
router.post('/createGame',createGame)
router.post('/Creategameuser', createGameUser);
router.get('/games/:gameId/users', getGameDetails);
router.post('/login', login);
router.get('/element', getElementById);
router.put("/updatePositions/:id/:position", updatePositions);
router.put("/StartGame/:id", startGame);
router.get('/users/:id', getUserById);
router.get('/game/capacity/:gameid', getCapacityByGameId);
router.post('/register', register); // Use the register function in the route definition

export default router;