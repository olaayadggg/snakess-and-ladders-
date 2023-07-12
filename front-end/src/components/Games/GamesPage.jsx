import React, { useEffect } from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';

import PurpleButton from '../../Atoms/SharedComponents/PurpleButton'
import '../../App.css'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import axios from 'axios';
export default function GamesPage() {
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

    return (
        <Box sx={{
            bgcolor: 'black', minHeight: '100vh'
        }} >
            <Container maxWidth="lg">
                <Stack direction='row' spacing={2} sx={{
                    mt: 2, justifyContent: 'center',
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
                            <Stack key={index}
                                className='glowing'
                                sx={{
                                    width: { md: 1 / 4, sm: 1 / 3, xs: 1 / 2 }, my: 3, mx: 1,
                                    boxShadow: 2, border: 3,
                                    borderColor: 'rgb(104, 66, 255)', borderRadius: 2
                                }}>
                                <Box sx={{ width: '100%', height: 1 / 3 }}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfzFuFlmbtEsO47dSN6Upp8So7CBx9Gxqxg&usqp=CAU"
                                        style={{ width: '100%' }} />
                                </Box>
                                <Stack sx={{
                                    mt: 2,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Typography sx={{ color: 'white' }}>Created By : {game?.currentUser
                                    }</Typography>

                                    <PurpleButton title={'JOIN'} />
                                </Stack>


                            </Stack>)
                    })}
                </Stack>
            </Container>
        </Box>


    );
}









