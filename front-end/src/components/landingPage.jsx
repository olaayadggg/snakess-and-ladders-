// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import landingPageStyles from '../styles/landingPageStyles';

const LandingPage = () => {
    const classes = landingPageStyles();

    const handleCreateGame = () => {
        // create game logic
    };

    return ( <div className={classes.container}>
        <Typography variant="h1">Welcome to Snakes and Ladder</Typography>
        <Typography variant="body1">
          Wait for other players to join or create a new game:
        </Typography>
        <Button variant="contained" color="primary" onClick={handleCreateGame}>
          Create Game
        </Button>
        <Typography variant="body1">Number of players:</Typography>
        <FormControl variant="outlined" className={classes.select}>
          <InputLabel id="player-select-label">Players</InputLabel>
          <Select labelId="player-select-label" label="Players">
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </div> 
    );
};

export default LandingPage;