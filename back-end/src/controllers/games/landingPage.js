let capacity = 0
let noOfPlayers=0
const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http)

http.listen(3001,()=>console.log('listening'));



const createGame =(Capacity)=>{
    // generate game id from DB
    // store Players No=1
    // let gameId=5
    // io.on("connection", socket => {
    //     socket.join(gameId);
    // });

}
const join = (GameId,UserId) => {
//   extract players No and increment it
//   store UserId in gameUsers
//   extract capacity
    capacity===noOfPlayers?start(GameId):0
    io.on("connection", socket => {
        socket.join(GameId);
    });
}
const start =(gameId)=>{
    io.emit("Start",gameId)
}
export  {io
};