
import React from 'react'
import '../../App.css'
import WaitingContainer from './WaitingContainer'
import PurpleButton from '../../Atoms/SharedComponents/PurpleButton'
import { Stack, Typography } from '@mui/material'

export default function LandingPage() {
  return (
    <Stack spacing={3}
      sx={{
        margin: 0,
        height: "100vh",
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        // alignItems: "space-around",
        // justifyContent: "space-around",
        backgroundColor: "black",
      }}>
      <Typography sx={{
        color: 'white',
        fontWeight: "700",
        fontSize: 24
      }}>Snakes and Ladders</Typography>

      <PurpleButton title={'Play Now'} />
      <WaitingContainer />
    </Stack >
  )
}

