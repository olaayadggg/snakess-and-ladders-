import express from 'express';
import pkg from 'sequelize';
const { Sequelize, DataTypes, Model } = pkg;
import bodyParser from 'body-parser';

const router = express.Router();
const app = express();

// Sequelize configuration
const sequelize = new Sequelize('snakes-and-ladders', 'root', 'Ahmedkhali12345@#$%', {
    host: 'localhost',
    dialect: 'mysql',
});

// Define models
class User extends Model { }
User.init(
    {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'user' }
);

class Game extends Model { }
Game.init(
    {
        boardID: DataTypes.INTEGER,
        noOfPlayers: DataTypes.INTEGER,
        status: DataTypes.STRING,
        capacity: DataTypes.INTEGER,
        currentUser: DataTypes.STRING,
        lastMove: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'game' }
);

class GameUser extends Model { }
GameUser.init(
    {
        userid: DataTypes.INTEGER,
        gameid: DataTypes.INTEGER,
        position: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'gameUser' }
);

class Element extends Model { } // Renamed the model to 'Element'
Element.init(
    {
        gameid: DataTypes.INTEGER,
        from: DataTypes.INTEGER,
        to: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'elements' } // Updated modelName to 'elements'
);


class board extends Model { } // Renamed the model to 'Element'
Element.init(
    {
        name: DataTypes.STRING(50),
        Image: DataTypes.STRING(255),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'elements' } // Updated modelName to 'elements'
);

app.use(bodyParser.json());

app.get('/users', async (req, res) => {
    const { name } = req.query;
    try {
        const user = await User.findOne({
            where: { name },
            attributes: ['name'],
        });
        const isNameExists = !!user;
        res.json(isNameExists);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.get('/game', async (req, res) => {
    try {
        const games = await Game.findAll({ where: { status: 'pending' } });
        res.json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// adding user to database
app.post('/adduser', async (req, res) => {
    const { name, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { name } });
        if (existingUser) {
            res.json("user already exist ");
        } else {
            const user = await User.create({ name, password, createdAt: new Date(), updatedAt: new Date() });
            res.json({ id: user.id });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/gameuser', async (req, res) => {
    const { userid, gameid, position } = req.body;
    try {
        const gameUser = await GameUser.create({
            userid,
            gameid,
            position,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.send('User added to game');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(user);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/games/:id', async (req, res) => {
    const gameId = req.params.id;
    try {
        const game = await Game.findByPk(gameId);
        if (!game) {
            res.status(404).json({ error: 'Game not found' });
        } else {
            res.json(game);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/gameUser/:id', async (req, res) => {
    const gameId = req.params.id;
    try {
        const gameUser = await GameUser.findByPk(gameId);
        if (!gameUser) {
            res.status(404).json({ error: 'Game not found' });
        } else {
            res.json(gameUser);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/game', async (req, res) => {
    const { boardID, noOfPlayers, status, capacity, currentUser, lastMove } = req.body;
    try {
        const game = await Game.create({
            boardID,
            noOfPlayers,
            status,
            capacity,
            currentUser,
            lastMove,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.send('Game added');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/addElement', async (req, res) => {
    const { gameID, from, to } = req.body;
    try {
        const element = await Element.create({
            gameid: gameID, // Renamed to 'gameid'
            from,
            to,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.send('Element added');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/element', async (req, res) => {
    try {
        const elements = await Element.findAll(); // Updated to use the correct model name 'Element'
        res.json(elements); // Updated variable name from 'element' to 'elements'
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/gameuser/:id', async (req, res) => {
    const gameUserId = req.params.id;
    try {
        const deletedGameUser = await GameUser.destroy({
            where: { id: gameUserId },
        });
        if (deletedGameUser === 0) {
            res.status(404).json({ error: 'Game user not found' });
        } else {
            res.send('Game user deleted');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Sync Sequelize models and start the server
sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running');
    });
});
