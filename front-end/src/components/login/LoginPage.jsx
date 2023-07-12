

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Stack, FormControl, Typography } from '@mui/material';

import '../../App.css';

//const onSubmit =()=>{console.log('submitted done');}

export default function LoginPage() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('submitted');
    // navigate(`/landing-page`);
  }

  return (
    <Stack sx={{
      backgroundColor: 'black',
      height: '90vh', padding: 3
    }}>
      <FormControl
        onSubmit={() => handleSubmit()}
        autoComplete='off'
        sx={{ height: '100%', 
          justifyContent: 'center', alignItems: 'center'
        }}
      >

        <Stack sx={{ width: 2 / 3, my: 4, alignItem: 'center' }}>
          <TextField
            label="Your Name" 
            focused
            color="warning"
            sx={{
              '& .css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', color: "gray"
              },
              '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                color: "white"
              }

            }}
            InputProps={{ inputProps: { style: { color: '#fff' } } }}

            id="name"
            type="text"
          // placeholder="Enter your Name"
          />

        </Stack>
        <Stack sx={{ width: 2 / 3, my: 4, alignItem: 'center' }}>

          <TextField
            label="Password" focused
            color="warning"
            sx={{
              '& .css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', color: "gray"
              },
              '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                color: "white"
              }

            }}
            InputProps={{ inputProps: { style: { color: '#fff' } } }}

            id="password"
            type="password"
          // placeholder="Enter your password"

          />
        </Stack>

        <Stack sx={{ width: 2 / 3, my: 4, alignItem: 'center' }}>

          <button className="raise">Get Start</button>
        </Stack>
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <Typography sx={{ color: 'white' }}>Don't hav an account?</Typography>
          <Button
            onClick={() => navigate(`/register`)}
            className='raise'
            sx={{
              px: 2, background: 'transparent', textDecoration: 'underline'
              , color: "rgb(104, 66, 255)", fontWeight: '600', '&:hover': { backgroundColor: 'transparent' }
            }}>
            Register Now
          </Button>

        </Stack>
      </FormControl>
    </Stack>

  )
}


























// import React, { useState } from 'react';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { NavLink } from 'react-router-dom';
// // import { useNavigate } from "react-router-dom";
// // import { authAPI} from '../API/Auth'
// const LoginPage = () => {
//   // const navigate = useNavigate();
//   const [error, setError] = useState('')


//   const initialValues = {
//     email: '',
//     password: '',
//   };
//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Please enter a valid email')
//       .required('Email is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long')

//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//       )
//   });


//   const onSubmit = async (values
//     // , props
//     ) => {
//     console.log(values);
//     // console.log(props)
//     // const payLoad = {
//     //   "email": values.email
//     // }
//     // const baseURL = 'http://localhost:2000/api/v1/auth/login'

//     ///////i comment
//     //  await authAPI.login(values)
//     //     .then(function (response) {
//     //     console.log(response);
//     //     console.log(response.data);
//     //     localStorage.setItem("token",response.data.token);
//     //     localStorage.setItem("user",JSON.stringify(response.data.user));
//     //     if(response.data.user.role ==='user'){
//     //       navigate("/");
//     //     }else{
//     //       navigate("/admin");
//     //     }
//     //     })
//     //     .catch(function (error) {
//     //       // console.log("err || ", error.response.data);
//     //     setError(error.response.data);
//     //     });
//     //   setTimeout(() => {
//     //     props.resetForm();
//     //     props.setSubmitting(false);
//     //   }, 2000);
//   };


//   return (

//     <div className="row justify-content-center m-5 pt-5">
//       <div className="col-sm-6 col-md-4">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title text-center mb-4">Login</h5>
//             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//               {({ errors, touched }) => (
//                 <Form>
//                   <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <Field type="email" name="email" id="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
//                     <ErrorMessage name="email" component="div" className="invalid-feedback" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <Field type="password" name="password" id="password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} />
//                     <ErrorMessage name="password" component="div" className="invalid-feedback" />
//                   </div>
//                   {error && <div className="text-danger text-center mt-3">{error}</div>

//                   }
//                   <div className='d-flex flex-column align-content-center  '>

//                     <button type="submit" className="btn btn-primary btn-block mt-4 mb-4">Sign in</button>
//                     <NavLink className={'text-center'} to={'/register'}>don't hav an account?</NavLink>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;