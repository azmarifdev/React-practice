/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Todo from './Todo';
import style from '../style/todos.module.css';

const Todos = ({ allTodo, handleDelete }) => {
    // console.log(allTodo);
    return (
        <div className={style.todos}>
            {allTodo.map((todo) => (
                <Todo handleDelete={handleDelete} todo={todo.todo} key={todo.id} id={todo.id} />
            ))}
            {/* {allTodo.map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))} */}
        </div>
    );
};

export default Todos;
