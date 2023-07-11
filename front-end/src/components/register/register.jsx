// import React from 'react'
// import { useFormik } from 'formik';
// import { Button, TextField, Stack, FormControl, Typography } from '@mui/material';
// import { basicSchema } from '../Schemas';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// export default function RegisterPage() {
//   // const { values, handleBlur, errors, handleChange, handleSubmit } = useFormik({
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       password: '',
//       confirmPassword: '',
//     }, validationSchema: basicSchema,
//     onSubmit: function (values) {

//       console.log('ggggggggggggggggggg');

//       alert(`You are registered! Name: `);
//       //  alert(`You are registered! Name: ${formik.values.name}`);
//     }
//   })
//   console.log('formik', formik.values)

//   return (
  
//     <Stack sx={{backgroundColor:'black',
//       height: '90vh', padding: 3
//     }}>
//       <Typography sx={{ color: 'white' }}>HELLO Player </Typography>
//       {/* form */}
//       <FormControl
//         onSubmit={formik.handleSubmit}
//         //onSubmit={formik.handleSubmit}
//         autoComplete='off'
//         sx={{ height: '100%', 
//         justifyContent: 'center', alignItems: 'center'
//       }}
//       >
//         {/*======== name ===========*/}
//         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>
//         {/* input */}
//           <TextField id="name"
//             type="text"
//             // placeholder="Enter your Name"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           // onChange={handleChange}
//           // onBlur={handleBlur}
//           // value={values.name}
//           label="Enter your Name" 
//           focused
//           color="warning"
//           sx={{
//             '& .css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//               borderColor: 'white', color: "gray"
//             },
//             '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
//               color: "white"
//             }

//           }}
//           InputProps={{ inputProps: { style: { color: '#fff' } } }}
// />
//         </Stack>
//         {/*======== password ===========*/}
//         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>
//           <TextField id="password"
//             type="password"
//             // placeholder="Enter your password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//           // value={values.password}
//           // onChange={handleChange}
//           label="Enter your password" 
//           focused
//           color="warning"
//           sx={{
//             '& .css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//               borderColor: 'white', color: "gray"
//             },
//             '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
//               color: "white"
//             }

//           }}
//           InputProps={{ inputProps: { style: { color: '#fff' } } }}
// />
//         </Stack>

//         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>
//           <TextField id="confirmPassword"
//             type="password"
//             //required
//             // placeholder="confirm Password"
//             onChange={formik.handleChange}
//             value={formik.values.confirmPassword}
//             onBlur={formik.handleBlur}
//             // onChange={handleChange}
//             // value={values.confirmPassword}
//             // onBlur={handleBlur}
//             focused
//             label="Confirm Password" 
//             color="warning"
//             sx={{
//               '& .css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                 borderColor: 'white', color: "gray"
//               },
//               '& .css-1lczath-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
//                 color: "white"
//               }

//             }}
//             InputProps={{ inputProps: { style: { color: '#fff' } } }}

//           />
//         </Stack>

//         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>

//           <Button variant="contained"
//             className="button"
//             //className='slide-fwd-center button'
//             sx={{
//               backgroundColor: "#795548",
//               py: 2,
//               fontWeight: '600'
//               , '&:hover': { backgroundColor: "#8a6254", boxShadow: 1, fontWeight: '800' }
//             }} >Submit</Button>
//         </Stack>
//         <Stack>

//         </Stack>

//       </FormControl>
//     </Stack>

//   )
// }


// // import React from 'react'
// // import { useFormik } from 'formik';
// // import { Button, TextField, Stack, FormControl, Typography } from '@mui/material';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import { basicSchema } from '../Schemas';
// // import '../App.css';
// // import './form.css';

// // //const onSubmit =()=>{console.log('submitted done');}

// // export default function RegisterPage() {
// //   const { values, handleBlur, errors, handleChange, handleSubmit } = useFormik({
// //     //const formik=useFormik({
// //     initialValues: {
// //       name: '',

// //       password: '',
// //       confirmPassword: '',
// //       age: '',
// //     }, validationSchema: basicSchema,
// //     onSubmit: function (values) {
// //       alert(`You are registered! Name: `);
// //       //  alert(`You are registered! Name: ${formik.values.name}`);
// //     }
// //   })

// //   //console.log('formik', values)
// //   return (
// //     <Stack sx={{
// //       height: '90vh', padding: 3
// //     }}>
// //       <h3 className='test'>Register</h3>
// //       <FormControl
// //         onSubmit={handleSubmit}
// //         //onSubmit={formik.handleSubmit}
// //         autoComplete='off'
// //         sx={{
// //           height: '100%', boxShadow: 2, borderRadius: 3,
// //           justifyContent: 'center', alignItems: 'center'
// //         }}
// //       >

// //         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>
// //           <TextField id="name"
// //             type="text"
// //             placeholder="Enter your Name"
// //             //   value={formik.values.name}
// //             //  onChange={formik.handleChange}
// //             //onBlur={formik.handleBlur}
// //             onChange={handleChange}
// //             onBlur={handleBlur}
// //             value={values.name}
// //           />
// //           {/* {formik.touched.name && formik.errors.name && (
// //     <span className='text-red-400'>{errors.name} errrrror</span>)}
// // */}
// //         </Stack>
// //         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>
// //           <TextField id="password"
// //             type="password"
// //             placeholder="Enter your password"
// //             //  value={formik.values.password}
// //             //  onChange={formik.handleChange}
// //             value={values.password}
// //             onChange={handleChange}
// //           />
// //         </Stack>

// //         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>
// //           <TextField id="confirmPassword"
// //             type="password"
// //             //required
// //             placeholder="confirm Password"
// //             // onChange={formik.handleChange}
// //             //  value={formik.values.confirmPassword}
// //             // onBlur={formik.handleBlur}
// //             onChange={handleChange}
// //             value={values.confirmPassword}
// //             onBlur={handleBlur}
// //             sx={{
// //               borderRadius: 4
// //               , '&:hover': { border: 0 }
// //             }}
// //           />
// //         </Stack>

// //         <Stack sx={{ width: 2 / 3, margin: 2, alignItem: 'center' }}>

// //           <Button variant="contained"
// //             className="button"
// //             //className='slide-fwd-center button'
// //             sx={{
// //               backgroundColor: "#795548",
// //               py: 2,
// //               fontWeight: '600'
// //               , '&:hover': { backgroundColor: "#8a6254", boxShadow: 1, fontWeight: '800' }
// //             }}
// //           >Submit</Button>
// //         </Stack>
// //         <Stack>
// //           <Typography>don't hav an account?
// //           </Typography> </Stack>
// //       </FormControl>
// //     </Stack>

// //   )
// // }














// // // import React, { useState } from 'react';

// // // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // // import * as Yup from 'yup';
// // // import { NavLink } from 'react-router-dom';
// // // // import { useNavigate } from "react-router-dom";
// // // // import { authAPI} from '../API/Auth'
// // // const Login = () => {
// // //   // const navigate = useNavigate();
// // //   const [error, setError] = useState('')


// // //   const initialValues = {
// // //     email: '',
// // //     password: '',
// // //   };
// // //   const validationSchema = Yup.object().shape({
// // //     email: Yup.string()
// // //       .email('Please enter a valid email')
// // //       .required('Email is required'),
// // //     password: Yup.string()
// // //       .required('Password is required')
// // //       .min(8, 'Password must be at least 8 characters long')

// // //       .matches(
// // //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
// // //         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
// // //       )
// // //   });


// // //   const onSubmit = async (values
// // //     // , props
// // //     ) => {
// // //     console.log(values);
// // //     // console.log(props)
// // //     // const payLoad = {
// // //     //   "email": values.email
// // //     // }
// // //     // const baseURL = 'http://localhost:2000/api/v1/auth/login'

// // //     ///////i comment
// // //     //  await authAPI.login(values)
// // //     //     .then(function (response) {
// // //     //     console.log(response);
// // //     //     console.log(response.data);
// // //     //     localStorage.setItem("token",response.data.token);
// // //     //     localStorage.setItem("user",JSON.stringify(response.data.user));
// // //     //     if(response.data.user.role ==='user'){
// // //     //       navigate("/");
// // //     //     }else{
// // //     //       navigate("/admin");
// // //     //     }
// // //     //     })
// // //     //     .catch(function (error) {
// // //     //       // console.log("err || ", error.response.data);
// // //     //     setError(error.response.data);
// // //     //     });
// // //     //   setTimeout(() => {
// // //     //     props.resetForm();
// // //     //     props.setSubmitting(false);
// // //     //   }, 2000);
// // //   };


// // //   return (

// // //     <div className="row justify-content-center m-5 pt-5">
// // //       <div className="col-sm-6 col-md-4">
// // //         <div className="card">
// // //           <div className="card-body">
// // //             <h5 className="card-title text-center mb-4">Login</h5>
// // //             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
// // //               {({ errors, touched }) => (
// // //                 <Form>
// // //                   <div className="form-group">
// // //                     <label htmlFor="email">Email</label>
// // //                     <Field type="email" name="email" id="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
// // //                     <ErrorMessage name="email" component="div" className="invalid-feedback" />
// // //                   </div>
// // //                   <div className="form-group">
// // //                     <label htmlFor="password">Password</label>
// // //                     <Field type="password" name="password" id="password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} />
// // //                     <ErrorMessage name="password" component="div" className="invalid-feedback" />
// // //                   </div>
// // //                   {error && <div className="text-danger text-center mt-3">{error}</div>

// // //                   }
// // //                   <div className='d-flex flex-column align-content-center  '>

// // //                     <button type="submit" className="btn btn-primary btn-block mt-4 mb-4">Sign in</button>
// // //                     <NavLink className={'text-center'} to={'/register'}>don't hav an account?</NavLink>
// // //                   </div>
// // //                 </Form>
// // //               )}
// // //             </Formik>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;