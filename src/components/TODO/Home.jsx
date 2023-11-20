/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Todos from './Todos';
import style from '../style/home.module.css';
import NewTodos from './NewTodos';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [allTodo, setAllTodo] = useState([]);
    // console.log(allTodo);

    const handleTodo = (todo) => {
        setAllTodo((prevTodo) => {
            return [...prevTodo, { id: uuidv4(), todo }];
        });
    };
    // const handleTodo = (todo) => {
    //     setAllTodo((prevTodo) => {
    //         return [...prevTodo, todo ];
    //     });
    // };

    const handleDelete = (id) => {
        setAllTodo((oldTodo) => {
            console.log(oldTodo);
            const removeTodo = oldTodo.filter((todo) => todo.id !== id);
            console.log(removeTodo); 
            return removeTodo;
        });
    };

    return (
        <div className={style.container}>
            <h1 style={{ color: 'white' }}>Todo App</h1>
            <NewTodos handleTodo={handleTodo} />
            <Todos handleDelete={handleDelete} allTodo={allTodo} />
        </div>
    );
};

export default Home;
