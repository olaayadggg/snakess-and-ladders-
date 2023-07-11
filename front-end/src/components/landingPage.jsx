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

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState(2);
  const [joinedPlayers, setJoinedPlayers] = useState([]);
  const [countdown, setCountdown] = useState(3);
  const [showStart, setShowStart] = useState(false);

  const handleCreateGame = () => {
    setIsLoading(true);

    // Simulate an asynchronous call to the backend
    setTimeout(() => {
      setIsLoading(false);
      setIsWaiting(true);
      setJoinedPlayers([getRandomPlayerName()]);
    }, 2000);
  };

  const handlePlayerJoin = () => {
    const newPlayer = getRandomPlayerName();
    setJoinedPlayers([...joinedPlayers, newPlayer]);
    setSelectedPlayers(selectedPlayers - 1);
  };

  const handlePlayerLeave = () => {
    const updatedPlayers = [...joinedPlayers];
    updatedPlayers.pop();
    setJoinedPlayers(updatedPlayers);
    setSelectedPlayers(selectedPlayers + 1);
  };

  const handlePlayerSelect = (event) => {
    setSelectedPlayers(event.target.value);
  };

  const getRandomPlayerName = () => {
    return `Player ${Math.floor(Math.random() * 100)}`;
  };

  useEffect(() => {
    if (joinedPlayers.length === selectedPlayers && !showStart) {
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
    // Implement your navigation logic here
    // Example:
    // window.location.href = "/board";
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
          backgroundImage: "url('front-end/board.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Welcome to Snakes and Ladder
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "16px" }}>
          {isWaiting
            ? "Waiting for players to join..."
            : "Wait for other players to join or create a new game:"}
        </Typography>
        {!isWaiting && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateGame}
            sx={{ marginBottom: "16px" }}
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
            <Typography variant="body1" sx={{ marginBottom: "8px" }}>
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
            <Typography variant="body1" sx={{ marginBottom: "8px" }}>
              Joined Players:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {joinedPlayers.map((player, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ marginRight: "8px" }}
                >
                  {player}
                </Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePlayerJoin}
              disabled={joinedPlayers.length >= selectedPlayers}
              sx={{ marginTop: "8px" }}
            >
              Join Player
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePlayerLeave}
              disabled={joinedPlayers.length === 0}
              sx={{ marginTop: "8px" }}
            >
              Leave Player
            </Button>
          </>
        )}
        {showStart && (
          <Fade in={showStart}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                marginTop: "16px",
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
          background-image: url('../board.jpeg');
          background-size: cover;
          background-position: center;
        }
      `}
      </style>
    </>
  );
};

export default LandingPage;
