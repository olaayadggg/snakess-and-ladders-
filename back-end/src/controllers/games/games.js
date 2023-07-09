import { io } from './landingPage.js';
let gameId=null
let current_turn=0
let lastMove = 0
const users = [ [1000, 21],
    [300, 40],
    [700, 35]
];


 const end =(gameId)=>{
 //    emit to users (declare winners) , end game  , change status of game
     io.emit("win",gameId)
 };

const checkRemainingUsers = ()=>{
    users.length===1?end():0;
}

const dice =()=>{
    const randomDecimal = Math.random();
    // Scale the random decimal to a number between 1 and 6
    return Math.floor(randomDecimal * 6) + 1;
};
const kickUser=(index)=>{
    users.splice(index,1)
//  delete from database
}
setInterval(()=>{
 lastMove>=20?kickUser(current_turn):0
    },20000
)



const movePieces = ()=>{
        const diceNumber = dice();
        users[current_turn][1]+=diceNumber
        checkWinner(gameId);
        checkRemainingUsers();
        current_turn=(current_turn+1)%users.length
};

const checkWinner = (gameId)=>{
    if (users[current_turn][1] === 100) {
        end(gameId);
    }
};
