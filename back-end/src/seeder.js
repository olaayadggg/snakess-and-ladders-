import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234567890!@#$%^&*(',
    database: 'snakes-and-ladders'
});

// Define an array of data to seed
const users = [{
        name: 'John Doe',
        password: 'john.doe@example.com'
    },
    {
        name: 'Jane Smith',
        password: 'jane.smith@example.com'
    }
];

const board = [{
    name: 'snakes-and-ladders',
    image: "https://raw.githubusercontent.com/Soupaul/snakes-and-ladders-multiplayer/master/public/images/board.png"
}];

const elements = [{
        from: 2,
        to: 23,
    },
    {
        from: 4,
        to: 68,
    },
    {
        from: 6,
        to: 45,
    },
    {
        from: 20,
        to: 59,
    },
    {
        from: 30,
        to: 96,
    },
    {
        from: 50,
        to: 5,
    },
    {
        from: 43,
        to: 17,
    },
    {
        from: 52,
        to: 72,
    },
    {
        from: 56,
        to: 8,
    },
    {
        from: 57,
        to: 96,
    },
    {
        from: 71,
        to: 92,
    },
    {
        from: 73,
        to: 15,
    },
    {
        from: 84,
        to: 58,
    },
    {
        from: 87,
        to: 49,
    },
    {
        from: 98,
        to: 40,
    },
];

const games = [{
    boardID: 1,
    status: 'started',
    capacity: 3,
    currentUser: 2,
    lastMove: 2.5,
}];

// Define an async function to seed the data
async function seedData() {
    const connection = await pool.getConnection();
    try {
        // Begin a transaction
        await connection.beginTransaction();

        // Insert data into the users table
        await connection.query('INSERT INTO users (name, password) VALUES ?', [users.map(user => [user.name, user.password])]);
        await connection.query('INSERT INTO boards (name, image) VALUES ?', [board.map(board => [board.name, board.image])]);
        await connection.query('INSERT INTO elements (`from`, `to`) VALUES ?', [elements.map(element => [element.from, element.to])]);
        await connection.query('INSERT INTO games (boardID, status,capacity,currentUser,lastMove) VALUES ?', [games.map(game => [game.boardID, game.status, game.capacity, game.currentUser, game.lastMove])]);


        // Commit the transaction
        await connection.commit();
        console.log('Data seeded successfully');
    } catch (error) {
        // Roll back the transaction if an error occurred
        await connection.rollback();
        console.error('Failed to seed data', error);
    } finally {
        // Release the connection back to the pool
        connection.release();
    }
}

// Call the seedData function to seed the data
seedData();