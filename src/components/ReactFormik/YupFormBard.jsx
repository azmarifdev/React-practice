// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       gender: '',
//       phoneNumber: '',
//       agree: false,
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Please enter your name'),
//       username: Yup.string().required('Please enter your username'),
//       email: Yup.string().email('Please enter a valid email address'),
//       password: Yup.string().required('Please enter a password').min(6),
//       confirmPassword: Yup.string()
//         .required('Please confirm your password')
//         .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//       gender: Yup.string().required('Please select your gender'),
//       phoneNumber: Yup.string().required('Please enter your phone number'),
//       agree: Yup.bool().required('You must agree to the terms and conditions'),
//     }),
//     onSubmit: (values) => {
//       console.log('Submitted values:', values);
//     },
//   });

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
//       <form className="w-full" onSubmit={formik.handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className={`w-full border rounded-md p-2 ${formik.errors.name && 'border-red-500'}`}
//             id="name"
//             type="text"
//             {...formik.getFieldProps('name')}
//           />
//           {formik.errors.name && (
//             <span className="text-red-500 text-sm">{formik.errors.name}</span>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className={`w-full border rounded-md p-2 ${formik.errors.username && 'border-red-500'}`}
//             id="username"
//             type="text"
//             {...formik.getFieldProps('username')}
//           />
//           {formik.errors.username && (
//             <span className="text-red-500 text-sm">{formik.errors.username}</span>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className={`w-full border rounded-md p-2 ${formik.errors.email && 'border-red-500'}`}
//             id="email"
//             type="email"
//             {...formik.getFieldProps('email')}
//           />
//           {formik.errors.email && (
//             <span className="text-red-500 text-sm">{formik.errors.email}</span>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className={`w-full border rounded-md p-2 ${formik.errors.password && 'border-red-500'}`}
//             id="password"
//             type="password"
//             {...formik.getFieldProps('password')}
//           />
//           {formik.errors.password && (
//             <span className="text-red-500 text-sm">{formik.errors.password}</span>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//             Confirm Password
