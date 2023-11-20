/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    gender: Yup.string().required('Gender is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    agree: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});

const YupFormBlack = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans">
            <Formik
                initialValues={{
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    gender: '',
                    phoneNumber: '',
                    agree: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({ values, errors, touched, setFieldValue }) => (
                    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                            {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                            />
                            {errors.username && touched.username && <div className="text-red-500">{errors.username}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                            />
                            {errors.confirmPassword && touched.confirmPassword && (
                                <div className="text-red-500">{errors.confirmPassword}</div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                Gender
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="gender"
                                name="gender"
                                as="select">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Field>
                            {errors.gender && touched.gender && <div className="text-red-500">{errors.gender}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                            />
                            {errors.phoneNumber && touched.phoneNumber && (
                                <div className="text-red-500">{errors.phoneNumber}</div>
                            )}
                        </div>
                        <div className="mb-4">
                            <Field className="text-center text-red-500" id="agree" name="agree" type="checkbox" />
                            <label className="text-gray-700 text-sm font-bold ml-2" htmlFor="agree">
                                Agree to terms and conditions
                            </label>
                            {errors.agree && touched.agree && <div className="text-red-500">{errors.agree}</div>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign Up
                            </button>
                            <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default YupFormBlack;
