/* eslint-disable no-unused-vars */
// RegistrationForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const YupFormChat = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            phoneNumber: '',
            agree: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            username: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
            gender: Yup.string().required('Required'),
            phoneNumber: Yup.string().required('Required'),
            agree: Yup.boolean().oneOf([true], 'Must accept terms and conditions'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="max-w-md mx-auto mt-8">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...formik.getFieldProps('name')}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-xs">{formik.errors.name}</p>
                    )}
                </div>

                {/* Repeat the above structure for other form fields */}

                <div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default YupFormChat;
