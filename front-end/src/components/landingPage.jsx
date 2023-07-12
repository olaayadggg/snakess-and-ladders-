import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Fade,
} from "@mui/material";


import axios from 'axios';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState(2);
  const [joinedPlayers, setJoinedPlayers] = useState([]);
  const [, setCountdown] = useState(3);
  const [showStart, setShowStart] = useState(false);

  const [currCapacity, setCapacity] = useState(0);
  const [maximumPlayers, setMaximumPlayers] = useState(0);
  const [currGameId, setGameId] = useState(null);

  const url = "http://localhost:3001/";

  const handleCreateGame = () => {
    setIsLoading(true);
    // create game 
    const gameData = {
      capacity: selectedPlayers,
    };

    axios
      .post(`${url}game/CreateGame`, gameData)
      .then((response) => {
        console.log(response.data.gameId);
        const createdGameId = response.data.gameId;
        setTimeout(() => {
          setIsLoading(false);
          setIsWaiting(true);
          setJoinedPlayers(["Amr"]); // get player name creator or id
          setGameId(createdGameId); // Set the gameId using the saved value
        }, 2000);

        // set states:
        setCapacity(1);
        setMaximumPlayers(gameData.capacity);

        // handlePlayerJoin(userId)

        // add user to gameUser // handleplayerjoin
        console.log(`in join ${currGameId}`)
        let gameUser = {
          userId: 1111, // test
          gameId: currGameId, // test gameId
          position: 1
        }

        axios
          .post(`${url}gameuser`, gameUser)
          .then((response) => {
            console.log(response);
            })
          .catch((error) => {
              console.log(error);
            })
        })
        
      .catch((error) => {
          console.log(error);
        })   
        
        // render lobby function to fetch curr games
  };

  // lobby or waiting page?
  const handlePlayerJoin = () => {
    // add user to gamerusers
    let gameUser = {
      userId: 2000, // test
      gameId: currGameId, // test gameId
      position: 1
    }
    axios
      .post(`${url}gameuser`, gameUser)
      .then((response) => {
        // console.log(response);
        })
      .catch((error) => {
          console.log(error);
        })
    
    console.log("join");
    // increment game #player
    setCapacity((prevCapacity) => prevCapacity + 1);
    console.log(currCapacity);
    console.log(`maximum players ${maximumPlayers}`);

    // check capacity pass game id
    if (currCapacity >= maximumPlayers) {
      // change status
      console.log(`Game id when complete ${currGameId}`)
      axios
      .put(`${url}updateStatus/${currGameId}`, { status: "Started"} )
        .then((response) => {
          console.log(response);
          console.log("changed status to start");
        })
        .catch((error) => {
            console.log(error);
          })   
          
      console.log("Game Started");
      // route players to board
      redirectToBoard();
    }

    const newPlayer = getRandomPlayerName(); // get joined play name
    setJoinedPlayers([...joinedPlayers, newPlayer]);
    setSelectedPlayers(selectedPlayers - 1);
  };

  // const checkRoomCapacity = () => { // DELETE - use state instead of retrieving from database
  //   let CurrGameId = gameId; // test
  //   console.log(`${CurrGameId} gameId`)
  //   console.log(`${maximumPlayers} maximumPlayers`)
  //   console.log(`${capacity} capacity`)

  //   axios
  //     .get(`${url}/game/capacity/${CurrGameId}`)
  //     .then((response) => {
  //       const currCapacity = response.data.capacity;
  //       const maximumCapacity = maximumPlayers;

  //       if (currCapacity < maximumCapacity) {
  //         console.log(CurrGameId)
  //         console.log(maximumCapacity)
  //         console.log(currCapacity)
  //         console.log("Game room has available capacity.");
  //       } else {
  //         console.log("Game room is full.");
  //         // change game status

  //         // move players to game board
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // };

  // const handlePlayerLeave = () => { // ignore
  //   // const userId
  //   // remove gamerUser id from game
  //   // check if no of players in game is less than 1
  //   // decrement number of players in game db
  //   const updatedPlayers = [...joinedPlayers];
  //   updatedPlayers.pop();
  //   setJoinedPlayers(updatedPlayers);
  //   setSelectedPlayers(selectedPlayers + 1);

  //   axios
  //     .delete(`${url}gameuser`)
  // };

  const handlePlayerSelect = (event) => { // ignore
    setSelectedPlayers(event.target.value);
  };

  const getRandomPlayerName = () => { // ignore
    return `Player ${Math.floor(Math.random() * 100)}`;
  };

  useEffect(() => {
    if (currCapacity === maximumPlayers && !showStart) {
      const countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        setShowStart(true);
        clearInterval(countdownTimer);
        redirectToBoard();
      }, 4000);
    }
  }, [joinedPlayers, selectedPlayers, showStart]);

  const redirectToBoard = () => {
    
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          border: 1,
          boxShadow: 3,
          borderRadius: "8px",
          padding: "20px",
          position: "relative",
          backgroundColor: "#1f1f1f"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Welcome to Snakes and Ladder
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "16px",
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          {isWaiting
            ? "Waiting for players to join..."
            : "Wait for other players to join or create a new game:"}
        </Typography>
        {!isWaiting && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateGame}
            sx={{
              marginBottom: "16px",
              backgroundColor: "#009688",
              color: "#ffffff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#00796B",
              },
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              "Create Game"
            )}
          </Button>
        )}
        {!isWaiting && (
          <>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "8px",
                color: "#ffffff",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              Number of players:
            </Typography>
            <FormControl
              variant="outlined"
              style={{ minWidth: "120px", marginBottom: "16px" }}
            >
              <InputLabel id="player-select-label">Players</InputLabel>
              <Select
                labelId="player-select-label"
                label="Players"
                value={selectedPlayers}
                onChange={handlePlayerSelect}
                sx={{ marginBottom: "16px",
                color: "#ffffff",
              }}
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </>
        )}
        {isWaiting && (
          <>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "8px",
                color: "#ffffff",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              Joined Players:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {joinedPlayers.map((player, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    marginRight: "8px",
                    color: "#ffffff",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {player}
                </Typography>
              ))}
            </Box>
            {/* Join from lobby */}
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePlayerJoin}
              disabled={joinedPlayers.length >= maximumPlayers}
              sx={{
                marginTop: "8px",
                backgroundColor: "#D32F2F",
                color: "#ffffff",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#B71C1C",
                },
              }}
            >
              Join Player
            </Button>
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={handlePlayerLeave}
              disabled={joinedPlayers.length === 0}
              sx={{
                marginTop: "8px",
                backgroundColor: "#D32F2F",
                color: "#ffffff",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#B71C1C",
                },
              }}
            >
              Leave
            </Button> */}
          </>
        )}
        {showStart && (
          <Fade in={showStart}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                marginTop: "16px",
                color: "#ffffff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                animation: "fadeInOut 2s ease-in-out",
              }}
            >
              START!
            </Typography>
          </Fade>
        )}
      </Box>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
      `}
      </style>
    </>
  );
};

export default LandingPage;
