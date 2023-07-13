import React, { Children, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Stack, FormControl, Typography } from '@mui/material';
import axios from 'axios'; // Import axios library for making API requests

import '../../App.css';
import Layout from '../Layout/Layout';

export default function LoginPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const postUser = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/login', data);
      console.log('Response:', response.data.token);
      console.log('Response:', response.data.id);

      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        // navigate(`/lobby` ,{userId:1});
        navigate("/lobby", {
          state: {
            userId: response.data.userid
          },
        });
        console.log('navigate');
      }

    } catch (err) {
      console.log('Error:', err);
    }
  };

  // const redirectToAbout = () => {
  //   navigate("/about", {sdvsdv
  //       state: {
  //           name: 'Programming Fields',
  //           message: 'Message from home component',
  //       },
  //   });
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    postUser({ name, password });
  };

  return (
    <Layout   containerStyle={{ justifyContent: 'center',maxHeight:'100vh' ,   }}

      childern={
        <form onSubmit={handleSubmit} style={{display:'flex' ,flexDirection:'column' ,
        justifyContent:'center' ,alignItems:'center'}}>
          <Stack sx={{ width: 2 / 3, my: 4, alignItem: 'center' }}>
            <TextField
              label="Your Name"
              focused
              color="warning"
              sx={{
                '& .css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                  color: 'gray',
                },
                '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                  color: 'white',
                },
              }}
              InputProps={{ inputProps: { style: { color: '#fff' } } }}
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Stack>
          <Stack sx={{ width: 2 / 3, my: 4, alignItem: 'center' }}>
            <TextField
              label="Password"
              focused
              color="warning"
              sx={{
                '& .css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                  color: 'gray',
                },
                '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                  color: 'white',
                },
              }}
              InputProps={{ inputProps: { style: { color: '#fff' } } }}
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Stack>
          <Stack sx={{ width: 2 / 3, my: 4, alignItem: 'center' }}>
            <Button type="submit" className="raise">
              Get Started
            </Button>
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <Typography sx={{ color: 'white' }}>Don't have an account?</Typography>
            <Button
              onClick={() => navigate(`/register`)}
              className="raise"
              sx={{
                px: 2,
                background: 'transparent',
                textDecoration: 'underline',
                color: 'rgb(104, 66, 255)',
                fontWeight: '600',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              Register Now
            </Button>
          </Stack>
        </form>

      }>

    </Layout>
  );
}
