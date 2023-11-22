/* eslint-disable no-unused-vars */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const YupForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
            phoneNumber: '',
            gender: '',
            agree: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            username: Yup.string().required('Username is required'),
            phoneNumber: Yup.string().required('Phone number is required'),
            gender: Yup.string().required('Gender is required'),
            agree: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
        }),
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm">{formik.errors.name}</div>
                )}
            </div>

            {/* Repeat the above pattern for other form fields */}

            <div className="mb-4">
                <label htmlFor="agree" className="flex items-center">
                    <input
                        type="checkbox"
                        id="agree" 
                        name="agree"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.agree}
                        className="mr-2"
                    />
                    <span className="text-sm text-gray-700">I agree to the terms and conditions</span>
                </label>
                {formik.touched.agree && formik.errors.agree && (
                    <div className="text-red-500 text-sm">{formik.errors.agree}</div>
                )}
            </div>

            <div className="flex space-x-4">
                <button type="reset" onClick={formik.handleReset} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                    Reset
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default YupForm;
