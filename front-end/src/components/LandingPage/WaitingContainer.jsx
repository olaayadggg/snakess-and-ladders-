import React from 'react'
import { Button, TextField, Stack, FormControl, Typography, LinearProgress } from '@mui/material';

export default function WaitingContainer() {
    return (
        <Stack>
            <Typography sx={{ color: 'white' }}>Almost there , Waiting for players to join </Typography>

            <LinearProgress
                // color="danger" 
                sx={{
                    "& .css-1x114k-MuiLinearProgress-root": { backgroundColor: 'rgb(133, 102, 255)' },
                    "& .MuiLinearProgress-bar": { backgroundColor: 'rgb(104, 66, 255)' },
                }}
            />


        </Stack>
    )
}

