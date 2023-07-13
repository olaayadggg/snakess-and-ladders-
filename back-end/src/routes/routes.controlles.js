import pkg from 'sequelize';
const { Sequelize, DataTypes, Model ,Op} = pkg;
import jwt from 'jsonwebtoken';


import bcrypt from 'bcrypt';
import Game from "../../models/game.js";
import GameUsers from "../../models/gameusers.js";
import User from "../../models/user.js";
import Elements  from "../../models/elements.js";


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

export const login = async (req, res) => {
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
                    res.json({ passwordIsRight: true, token  , userid:user.id }); // Include the token in the response
                } else {
                    res.json({ passwordIsRight: false });
                }
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const game = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getCapacityByGameId = async (req, res) => {
    const gameid = req.params.gameid;
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
}

export const register =  async (req, res) => {
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
}

export const createGameUser = async (req, res) => {
    const { userid, gameId } = req.body;
    try {
        // Check if user is already in the game
        const existingGameUser = await GameUsers.findOne({ where: { userid: userid, gameid: gameId } });
        if (existingGameUser) {
            return res.status(400).json({ error: 'User is already in the game' });
        }

        const game = await Game.findOne({ where: { id: gameId } });
        if (game.numberOfPlayers === game.capacity) {
            return res.status(400).json({ error: 'Game is full' }); // Return error if the game is already full
        }
        const gameUser = await GameUsers.create({
            position: 0,
            gameid: gameId,
            userid: userid,
            updatedAt: new Date(),
            createdAt: new Date()
        });
        // Update numberOfPlayers in the game table
        game.numberOfPlayers += 1;
        await game.save();

        res.send('User added to game');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json({"name":user.name});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const startGame = async (req, res) => {
    const gameID = req.params.id;

    try {
        const game = await Game.findByPk(gameID);
        if (!game) {
            res.status(404).json({ error: 'game not found' });
        } else {
            await game.update({ status: 'Started' });
            res.json({ message: 'game started' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const updatePositions = async (req, res) => {
    const id = req.params.id;
    const newPosition = req.params.position;
    try {
        const gameUser = await GameUsers.findByPk(id);
        if (!gameUser) {
            res.status(404).json({ error: 'not in game' });
        } else {
            await gameUser.update({ position:newPosition });
            res.json({ message: 'position updated' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getElementById =  async (req, res) => {
    const from = req.body.from;
    console.log("ola")

    try {
        const elements = await Elements.findOne({
            where: { from },
        });

        if(!elements){
            res.json(from);
        }
        else{
            res.json(elements.to);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteGameUser =  async (req, res) => {
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
}

export const deleteGame =  async (req, res) => {
    const gameId = req.params.id;
    try {
        const deletedGame = await Game.destroy({
            where: { id: gameId },
        });
        if (deletedGame === 0) {
            res.status(404).json({ error: 'Game not found' });
        } else {
            res.send('Game deleted');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getGameDetails = async (req, res) => {
    const gameId = req.params.gameId;
  
    // Find the game details using the gameId
    const game = await Game.findOne({
      where: {
        id: gameId,
      },
    });
  
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
  
    // Find all users associated with the game using the gameId
    const users = await GameUsers.findAll({
      where: {
        gameId: gameId,
      },
    });
  
    return res.json({
      game: game,
      users: users,
    });
  }

export const createGame = async (req, res) => {
    const { capacity, userid } = req.body;
    try {
        // Check if user is already in a game
        const existingGame = await GameUsers.findOne({ where: { userid: userid } });
        if (existingGame) {
            return res.status(400).json({ error: 'User is already in a game' });
        }

        const game = await Game.create({
            boardid: 1,
            numberOfPlayers: 1,
            status: 'pending',
            capacity: capacity,
            currentTurn: -1,
            lastMove: 0.0,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await GameUsers.create({
            position: 0,
            gameid: game.id,
            userid: userid,
            updatedAt: new Date(),
            createdAt: new Date()
        });

        res.json({ gameId: game.id }); // Return the game ID in the response

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};