import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  let mySchema = Yup.object({
    name: Yup.string().required('Name is required').matches(/^[a-zA-Z]+$/, 'Invalid name'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[A-Z][a-zA-Z0-9]{3,8}$/, 'Invalid password'),
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: mySchema,
    onSubmit: (values) => login(values),
  });

  const login = (values) => {



    console.log(values);
  };

  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}

          <label className="mt-4" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}

          <button type="submit" className="mt-4 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
