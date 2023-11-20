/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';

// const Formik = () => {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         username: '',
//         phoneNumber: '',
//         gender: '',
//         agree: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const valueToUse = type === 'checkbox' ? checked : value;
//         setForm({ ...form, [name]: valueToUse });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(form);
//     };

//     const handleReset = () => {
//         setForm({
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//             username: '',
//             phoneNumber: '',
//             gender: '',
//             agree: false,
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                     Name
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                     Email
//                 </label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                     Password
//                 </label>
//                 <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     value={form.password}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="confirmPassword" className="form-label">
//                     Confirm Password
//                 </label>
//                 <input
//                     type="password"
//                     className="form-control"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={form.confirmPassword}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="username" className="form-label">
//                     Username
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="username"
//                     name="username"
//                     value={form.username}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="phoneNumber" className="form-label">
//                     Phone Number
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={form.phoneNumber}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="gender" className="form-label">
//                     Gender
//                 </label>
//                 <select className="form-select" id="gender" name="gender" value={form.gender} onChange={handleChange}>
//                     <option value="">Select...</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                 </select>
//             </div>
//             <div className="mb-3 form-check">
//                 <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id="agree"
//                     name="agree"
//                     checked={form.agree}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="agree" className="form-check-label">
//                     Agree to Terms and Conditions
//                 </label>
//             </div>
//             <button type="submit" className="btn btn-primary">
//                 Submit
//             </button>
//             <button type="reset" className="btn btn-secondary" onClick={handleReset}>
//                 Reset
//             </button>
//         </form>
//     );
// };

// export default Formik;

// RegistrationForm.js

import React, { useState } from 'react';

const Formik = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        phoneNumber: '',
        gender: '',
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
    };

    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
            phoneNumber: '',
            gender: '',
            agree: false,
        });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Agree Checkbox */}
                <div className="mb-4">
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <label htmlFor="agree" className="text-sm text-gray-700">
                        I agree to the terms and conditions
                    </label>
                </div>

                {/* Submit and Reset Buttons */}
                <div className="flex justify-between">
                    <button
                        type="reset"
                        onClick={handleReset}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded">
                        Reset
                    </button>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Formik;
