import express from 'express';
import pkg from 'sequelize';
const { Sequelize, DataTypes, Model ,Op} = pkg;
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import Game from "../../models/game.js";
import GameUsers from "../../models/gameusers.js";
import User from "../../models/user.js";
import Elements  from "../../models/elements.js";




const app = express();

const route = express.Router();
// Sequelize configuration



route.use(bodyParser.json());


// check if user is founded in database

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
            attributes: ['name', 'password']
        });

        if (!user) {
            res.json({ userExist: false });
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.json({ passwordIsRight: true });
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



// return all games wi the

route.get('/game', async (req, res) => {
    try {
        const games = await Game.findAll();
        res.json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


route.get('/game/capacity/:gameid', async (req, res) => {
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
});
//
// adding user to database
route.post('/register', async (req, res) => {
    const { name, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { name } });
        if (existingUser) {
            res.json("user already exist ");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password using bcrypt
            const user = await User.create({ name, password: hashedPassword, createdAt: new Date(), updatedAt: new Date() });
            res.json({ id: user.id });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


route.post('/Creategameuser', async (req, res) => {
    const { userid, gameid } = req.body;
    try {
        const gameUser = await GameUsers.create({
            position:0,
            gameid:gameid,
            userid:userid,
            updatedAt: new Date(),
            createdAt: new Date()
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
            res.json({"name":user.name});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// finished until here


route.put("/StartGame/:id", async (req, res) => {
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
});


route.put("/updatePositions/:id/:position", async (req, res) => {
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
});




// route.post('/game/joinGame', async (req, res) => {
//     const { boardID, noOfPlayers, status, capacity, currentUser, lastMove } = req.body;
//     try {
//         const game = await Game.create({
//             boardID,
//             noOfPlayers,
//             status,
//             capacity,
//             currentUser,
//             lastMove,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         });
//         res.send('Game added');
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// route.post('/addElement', async (req, res) => {
//     const { gameID, from, to } = req.body;
//     try {
//         const element = await Element.create({
//             gameid: gameID, // Renamed to 'gameid'
//             from,
//             to,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         });
//         res.send('Element added');
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

route.get('/element', async (req, res) => {
    const from = req.body.from;

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


export default route;