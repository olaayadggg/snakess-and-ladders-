import React from 'react'
import './purpleButton.css'
import { Button } from '@mui/material'

export default function PurpleButton({ title, onClick }) {
    return (
        <Button onClick={onClick}
            sx={{
                justifyContent: 'center'
                , alignItems: 'center'
            }}>
            <ul
                style={{ maxWidth:'fit-content',
                    paddingLeft:0
                }}
            >

                <li>
                    {title}
                    <span></span><span></span><span></span><span></span>
                </li>

            </ul></Button>
    )
}
