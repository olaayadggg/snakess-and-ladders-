

import snake1 from '../../images/snake1.png'
import snake2 from '../../images/snake2.png'
import ladder1 from '../../images/ladder1.png'
import ladder2 from '../../images/ladder2.png'


import React from 'react'
import { Stack, Box } from '@mui/material';

export default function Layout({ childern, containerStyle }) {
    return (
        <Stack 
        sx={{
            backgroundColor: 'black',
            // maxWidth: '100vw',
            width: '100vw',
            // width: 1 ,
            maxWidth: '100%',
            height: '100vh',  overflow: 'hidden',
            ...containerStyle
        }}>
            <Stack>
                {/* ============================================================================== */}

                <img src={snake2}
                    style={{
                        position: 'absolute', top: 0, left: 0, rotate: "-1deg",
                        width: "16%"
                    }} />
                <Box sx={{
                    position: 'absolute'
                    , left: 38, bottom: 40
                }}>
                    <img src={ladder1}
                        style={{
                            rotate: " 14deg",
                            width: '14%'
                        }} /></Box>
                <Box sx={{
                    position: 'absolute'
                    , right: 98, bottom: 55
                }}>
                    <img src={ladder2}
                        style={{
                            rotate: " -18deg",
                            width: '124%'
                        }} />
                </Box>
                <Box sx={{}}>
                    <img src={snake1}
                        style={{
                            position: 'absolute', top: " -20px", right: "32px",
                            rotate: "-40deg",
                            width: '18%'
                        }} /></Box>
            </Stack>
            {childern}
        </Stack>

    )
}






