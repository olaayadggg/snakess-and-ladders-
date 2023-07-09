import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';

const app = express();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root3',
    port: 8081,
    password: '123456789',
    database: 'snakes-and-ladders',
    connectionLimit: 10,
});

app.use(bodyParser.json());

app.get('/users', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        connection.release();
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/adduser', async (req, res) => {
    const { name, password } = req.body;
    try {
        const connection = await pool.getConnection();
        const createdAt = new Date(); // Get the current timestamp
        const updatedAt = createdAt; // Set updatedAt same as createdAt
        await connection.query(
            'INSERT INTO users (name, password, createdAt, updatedAt) VALUES (?, ?, ?, ?)',
            [name, password, createdAt, updatedAt]
        );
        connection.release();
        res.send('User added');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




app.post('/game', async (req, res) => {
    const { borardID, status, capacity, currentUser, lastMove } = req.body;
    try {
        const connection = await pool.getConnection();
        const createdAt = new Date(); // Get the current timestamp
        const updatedAt = createdAt; // Set updatedAt same as createdAt
        await connection.query(
            'INSERT INTO games (boardID, status, capacity, currentUser, lastMove, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [borardID, status, capacity, currentUser, lastMove, createdAt, updatedAt]
        );
        connection.release();
        res.send('Game added');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(3001, () => {
    console.log('Server is running');
});
