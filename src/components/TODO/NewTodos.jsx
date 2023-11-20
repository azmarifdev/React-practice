/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const NewTodos = ({ handleTodo }) => {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const { title, desc } = todo;
    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    // const handleChange = (e) => {
    //     setTodo({ ...todo, id: uuidv4(), [e.target.name]: e.target.value });
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleTodo(todo);
        setTodo({ title: '', desc: '' });
    };
    return (
        <div>
            <h3>Add Todo</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChange} name="title" />
                <input type="text" value={desc} onChange={handleChange} name="desc" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodos;
