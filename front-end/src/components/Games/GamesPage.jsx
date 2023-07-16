import React, { useEffect } from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';

import PurpleButton from '../../Atoms/SharedComponents/PurpleButton'
import '../../App.css'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";

import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
export default function GamesPage() {
    const location = useLocation();
    console.log('location', location)
    const navigate = useNavigate();

    // console.log("hhhhhhhhhhhhhhhhhh" ,userID);

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        console.log('inside')
        const response = await axios
            //   .get("https://jsonplaceholder.typicode.com/posts")
            .get("http://localhost:3001/game")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log('games reduxxxxxxxxxxx', products);

    // const gameImgs = ["https://images.crazygames.com/snakesandladders.png?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR",
    //     "https://www.cbc.ca/kids/images/snakesladders_play.jpg",
    //     'https://th.bing.com/th/id/R.3b10f96df54d9b4a14e2a456d456f29a?rik=daxfE8bl3%2bOLDw&pid=ImgRaw&r=0']


    const AddGameUser = async (data, gameId) => {
        try {
            const response = await axios.post('http://localhost:3001/gameuser', data);

            navigate("/board", {
                state: {
                    gameId: gameId
                },
            });

        } catch (err) {
            console.log('Error:', err);
        }
    };

    const joinGame = (gameId) => {
        console.log("game id", gameId);
        console.log("game id", location.state.userId);

        AddGameUser({

            "userid": location.state.userId,
            "gameid": gameId,
            "position": 0
        }, gameId)
    }

    return (
        <Box sx={{
            bgcolor: 'black', minHeight: '100vh'
        }} >
            <Container maxWidth="lg">
                <Stack direction='row' spacing={2} sx={{
                    py: 3, justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <button className="raise" onClick={() => fetchProducts()}>Refresh</button>
                    <button className="raise">Create new game</button>
                </Stack>

                <Stack direction='row'
                    sx={{
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    {products?.map((game, index) => {
                        return (
                            <Stack key={game?.id}
                                // className='glowing'
                                className='jello-horizontal'
                                sx={{
                                    width: { md: 1 / 4, sm: 1 / 3, xs: 1 / 2 }, my: 3, mx: 2,
                                    boxShadow: 2, border: 3,
                                    borderColor: 'rgb(104, 66, 255)', borderRadius: 2
                                }}>

                                <Box sx={{
                                    // border:3,borderColor:'red',
                                    width: '100%',
                                    borderRadius: 2
                                }}>
                                    {index % 2 === 0 ?
                                        <img src="https://images.crazygames.com/snakesandladders.png?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR"
                                            style={{
                                                width: '100%',
                                                height: '18vh'
                                            }} /> :

                                        <img src="https://www.cbc.ca/kids/images/snakesladders_play.jpg"
                                            style={{
                                                width: '100%',
                                                height: '18vh'
                                            }} />
                                    }
                                </Box>
                                <Stack sx={{
                                    mt: 2,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Typography sx={{ color: 'white' }}>Game id: {game?.id
                                    }</Typography>

                                    <PurpleButton title={'JOIN'} onClick={() => joinGame(game.id)} />
                                </Stack>


                            </Stack>)
                    })}
                </Stack>
            </Container>
        </Box>


    );
}









