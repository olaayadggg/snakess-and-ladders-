import route from "./routes.controlles";
import routesControlles from './routes.controlles';
import express from 'express';

const app = express();

const route = express.Router();
route.use(bodyParser.json());



route.get('/game', routesControlles.game );
route.delete('/gameuser/:id', routesControlles.deleteGameUser);
route.post('/Creategameuser', routesControlles.Creategameuser);
route.get('/game-details/:gameid',routesControlles.getGameDetails);
route.post('/login', routesControlles.login);
route.get('/element',routesControlles.getElementByID);
route.put("/updatePositions/:id/:position",routesControlles.updatePositions);
route.put("/StartGame/:id",routesControlles.startGame );
route.get('/users/:id', routesControlles.getUserByID);
route.post('/register',routesControlles.register);
route.get('/game/capacity/:gameid',routesControlles.getCapacityByGameId );
route.post('/addElement', routesControlles.addElement);


module.exports = route;