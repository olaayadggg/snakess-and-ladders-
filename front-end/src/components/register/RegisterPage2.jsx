import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Stack, FormControl, Typography } from '@mui/material';
import '../../App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




export default function RegisterPage2() {
  const navigate = useNavigate();

  const postUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/register", data);
      console.log("Response:", response.data);
      console.log("Responseeeeeeeeeeeeeee:", response.data.id);
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);

        navigate("/lobby", {
          state: {
            userId: response.data.id
          },
        });
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };




  const mySchema = Yup.object({
    name: Yup.string().required('Name is required').matches(/^[a-zA-Z]+$/, 'Invalid name'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[A-Z][a-zA-Z0-9]{3,18}$/, 'Invalid password'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: mySchema,
    onSubmit: (values) => postUser(values), // Call the postUser function with form values
  });

  const login = (values) => {
    console.log('values', values);
    postUsers({
      "name": "tasbeh",
      "password": "Tazem1ngedhe23"
    });
  };

  return (
    <Stack sx={{
      backgroundColor: 'black', minHeight: '100vh',
    }}>
      <Typography textAlign='center' sx={{ my: 1, mt: 4, color: 'white', fontSize: 20 }}>HELLO PLAYER </Typography>

      <form onSubmit={formik.handleSubmit}
        autoComplete='off'
        style={{
          // border: "1px solid red",
          height: '100%',
          // maxWidth:'90%',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center'
        }}>
        {/*======== name ===========*/}
        <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>

          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name ? true : false}
            helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
            fullWidth
            margin="normal"
            focused
            color="warning"
            sx={{
              '& .css-nmbvik-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', color: "gray"
              },
              '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                color: "white"
              }

            }}
            InputProps={{ inputProps: { style: { color: '#fff' } } }}
          />
        </Stack>
        <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>

          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password ? true : false}
            helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
            fullWidth
            margin="normal"
            focused
            color="warning"
            sx={{
              '& .css-nmbvik-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', color: "gray"
              },
              '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                color: "white"
              }

            }}
            InputProps={{ inputProps: { style: { color: '#fff' } } }}
          />
        </Stack>

        <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>
          <button className="raise">Get Start</button>
        </Stack>
        <Stack>

        </Stack>
      </form>
    </Stack>

  )
}



