import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root3',
    password: '123456789',
    port: 8081,
    database: 'snakes-and-ladders',
});

// Define an array of data to seed
const users = [
    {
        name: 'John Doe',
        password: 'john.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Jane Smith',
        password: 'jane.smith@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const board = [
    {
        name: 'snakes-and-ladders',
        image: "https://raw.githubusercontent.com/Soupaul/snakes-and-ladders-multiplayer/master/public/images/board.png",
    },
];

const elements = [
    {
        gameID:5,
        from: 2,
        to: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    // ... Rest of the elements
];

const games = [
    {
        boardID: 1,
        status: 'started',
        capacity: 3,
        currentUser: 2,
        lastMove: 2.5,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

// Define an async function to seed the data
async function seedData() {
    const connection = await pool.getConnection();
    try {
        // Begin a transaction
        await connection.beginTransaction();

        // Insert data into the users table
        await connection.query(
            'INSERT INTO users (name, password, createdAt, updatedAt) VALUES ?',
            [users.map(user => [user.name, user.password, user.createdAt, user.updatedAt])]
        );

        // Insert data into the boards table
        await connection.query(
            'INSERT INTO boards (name, image) VALUES ?',
            [board.map(board => [board.name, board.image])]
        );

        // Insert data into the elements table
        await connection.query(
            'INSERT INTO elements (`from`, `to`, createdAt, updatedAt) VALUES ?',
            [elements.map(element => [element.from, element.to, element.createdAt, element.updatedAt])]
        );

        // Insert data into the games table
        await connection.query(
            'INSERT INTO games (boardID, status, capacity, currentUser, lastMove, createdAt, updatedAt) VALUES ?',
            [games.map(game => [game.boardID, game.status, game.capacity, game.currentUser, game.lastMove, game.createdAt, game.updatedAt])]
        );

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
        console.log("sakoor");
    }
}

// Call the seedData function to seed the data
export default seedData;
