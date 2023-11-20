/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ReactForm = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input onChange={handleChange} value={name} type="text" name="name" id="name" required />
                </div>
                <div>
                    <label>Email : </label>
                    <input onChange={handleChange} value={email} type="email" name="email" id="email" required />
                </div>
                <div>
                    <label>Password : </label>
                    <input onChange={handleChange} value={password} type="password" name="password" id="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default ReactForm;
