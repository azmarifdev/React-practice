/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import style from '../style/todo.module.css';

const Todo = (props) => {
    const { title, desc } = props.todo;
    const { id } = props;
    console.log(props.todo);
    console.log(id);

    const handleDelete = (id) => {
        props.handleDelete(id);
    };

    return (
        <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(id)} className="style.btn">
                    <FaTrash />
                </button>
            </div>
        </article>
    );
};

export default Todo;
