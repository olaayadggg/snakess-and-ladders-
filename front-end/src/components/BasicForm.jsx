import React from 'react'
import { useFormik } from 'formik';
import Button from '@mui/material/Button';

export default function BasicForm() {
    const formik = useFormik({
        initialValues: {
            // firstName: '',
            // lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })
    console.log('formik', formik)
    return (

        <form onSubmit={formik.handleSubmit} autoComplete='off'>
            <label htmlFor='email'> Email</label>
            <input id="email"
                type="email"
                placeholder="Enter your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <label htmlFor='password'> Password</label>
            <input id="password"
                type="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <label htmlFor='confirmPassword'> Confirm Password</label>
            <input id="confirmPassword"
                type="password"
                placeholder="confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur} />
            <Button variant="contained">Submit</Button>
        </form>
    )
}
