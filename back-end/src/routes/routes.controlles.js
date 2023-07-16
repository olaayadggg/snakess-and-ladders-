import express from 'express';
import pkg from 'sequelize';
const { Sequelize, DataTypes, Model, Op } = pkg;
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const route = express.Router();

// Sequelize configuration
const sequelize = new Sequelize('snakes-and-ladders', 'root3', '123456789', {
    host: 'localhost',
    port: 8081,
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
    { sequelize, modelName: 'User' }
);

class Game extends Model { }

Game.init(
    {
        boardID: DataTypes.INTEGER,
        numberOfPlayers: DataTypes.INTEGER,
        status: DataTypes.STRING,
        capacity: DataTypes.INTEGER,
        currentTurn: DataTypes.INTEGER,
        lastMove: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'Game' }
);

class GameUsers extends Model { }

GameUsers.init(
    {
        userId: DataTypes.INTEGER,
        position: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'GameUsers' }
);

class Element extends Model { }

Element.init(
    {
        boardID: DataTypes.INTEGER,
        from: DataTypes.INTEGER,
        to: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'Element' }
);

class Board extends Model { }

Board.init(
    {
        name: DataTypes.STRING(50),
        Image: DataTypes.STRING(255),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { sequelize, modelName: 'Board' }
    
);

Game.belongsTo(Board, { foreignKey: 'boardID' });
Board.hasMany(Game, { foreignKey: 'boardID' });
Element.belongsTo(Board, { foreignKey: 'boardID' });
Board.hasMany(Element, { foreignKey: 'boardID' });
GameUsers.belongsTo(Game, { foreignKey: 'gameId' });
Game.hasMany(GameUsers, { foreignKey: 'gameId' });
User.hasOne(GameUsers, { foreignKey: 'userId' });
GameUsers.belongsTo(User, { foreignKey: 'userId' });

route.use(bodyParser.json());

const generateToken = (user) => {
    // You can customize the token payload as per your requirements
    const payload = {
        userId: user.id,
        name: user.name,
    };

    // Generate the token with a secret key and set the expiration time
    const token = jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });

    return token;
};


const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    jwt.verify(token, 'your_secret_key', (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }

        req.userId = decodedToken.userId;
        next();
    });
};

route.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        if (!name) {
            throw new Error('Missing "name" parameter');
        }

        const user = await User.findOne({
            where: Sequelize.where(
                Sequelize.fn('BINARY', Sequelize.col('name')),
                { [Op.eq]: name }
            ),
            attributes: ['name', 'password', 'id'],
        });

        if (!user) {
            res.json({ userExist: false });
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = generateToken(user); // Generate the token
                    res.json({ passwordIsRight: true, token, userid: user.id }); // Include the token in the response
                } else {
                    res.json({ passwordIsRight: false });
                }
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.get('/game', async (req, res) => {
    try {
        const games = await Game.findAll();
        res.json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.post('/register', async (req, res) => {
    const { name, password } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const existingUser = await User.findOne({ where: { name } });
        if (existingUser) {
            return res.json('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const token = generateToken(user); // Generate the token

        res.json({ id: user.id, token }); // Include the token in the response
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.get('/game/capacity/:id', async (req, res) => {
    const gameid = req.params.id;
    try {
        const game = await Game.findByPk(gameid, {
            attributes: ['capacity'], // Specify the 'id' and 'capacity' fields to retrieve
        });
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

route.post('/gameuser', async (req, res) => {
    const { userid, gameid, position } = req.body;
    try {
        const gameUser = await GameUsers.create({
            userId: userid,
            gameId: gameid,
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

route.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json({ id: user.id, name: user.name });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.get('/games/:id', async (req, res) => {
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


route.get('/game-details/:gameid', async (req, res) => {
    const gameId = req.params.gameid;

    try {
        const game = await Game.findByPk(gameId, {
            attributes: [
                'id',
                'boardid',
                'numberOfPlayers',
                'status',
                'capacity',
                'currentTurn',
                'lastMove',
            ],
            include: [
                {
                    model: GameUsers,
                    attributes: ['id', 'userid', 'position'],
                    include: [
                        {
                            model: User,
                            attributes: ['name'],
                        },
                    ],
                },

            ],
        });

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




route.put("/updateStatus/:id", async (req, res) => {
    const gameId = req.params.id;
    const newStatus = req.body.status;

    try {
        const gameUser = await Game.findByPk(gameId);

        if (!gameUser) {
            res.status(404).json({ error: 'Game user not found' });
        } else {
            await gameUser.update({ status: newStatus });
            res.json({ message: 'Status updated successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.put("/updatePositions/:id", async (req, res) => {
    const userID = req.params.id;
    const newPosition = req.body.position;

    try {
        const gameUser = await GameUsers.findByPk(userID);

        if (!gameUser) {
            res.status(404).json({ error: 'Game user not found' });
        } else {
            await gameUser.update({ position: newPosition });
            res.json({ message: 'Position updated successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.get('/findAllGameUsers/:id', async (req, res) => {
    const gameId = req.params.id;
    try {
        const gameUsers = await GameUsers.findAll({ where: { gameId } });
        res.json(gameUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.post('/game/CreateGame', async (req, res) => {
    const { boardID, capacity } = req.body;
    try {
        const game = await Game.create({
            boardID: 1,
            numberOfPlayers: 1,
            status: 'pending',
            capacity: capacity,
            currentTurn: -1,
            lastMove: 0.0,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.json({ gameId: game.id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.post('/addElement', async (req, res) => {
    const { gameID, from, to } = req.body;
    try {
        const element = await Element.create({
            boardID: gameID,
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

route.get('/element', async (req, res) => {
    try {
        const elements = await Element.findAll();
        res.json(elements);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.delete('/gameuser/:id', async (req, res) => {
    const gameUserId = req.params.id;
    try {
        const deletedGameUser = await GameUsers.destroy({
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
sequelize.sync();

export default route;
