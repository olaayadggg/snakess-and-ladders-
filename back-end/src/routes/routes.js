import express from 'express';
import bodyParser from 'body-parser';
import routesControlles from './routes.controllers.js';

const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.get('/game', routesControlles.game);
router.delete('/gameuser/:id', routesControlles.deleteGameUser);
router.delete('/game/:id', routesControlles.deleteGame);
router.post('/Creategameuser', routesControlles.Creategameuser);
router.get('/game-details/:gameid', routesControlles.getGameDetails);
router.post('/login', routesControlles.login);
router.get('/element', routesControlles.getElementByID);
router.put("/updatePositions/:id/:position", routesControlles.updatePositions);
router.put("/StartGame/:id", routesControlles.startGame);
router.get('/users/:id', routesControlles.getUserByID);
router.post('/register', routesControlles.register);
router.get('/game/capacity/:gameid', routesControlles.getCapacityByGameId);
router.post('/addElement', routesControlles.addElement);

module.exports = router;