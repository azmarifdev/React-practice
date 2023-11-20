/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './Todo.css';

const TodoBlack = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);
    const addTodo = (e) => {
        e.preventDefault();
        if (!value) return;
        const newTodo = { id: Date.now(), text: value };
        setTodos([...todos, newTodo]);
        setValue('');
    };
    const removeTodo = (id) => {
        const removedArr = todos.filter((todo) => todo.id !== id);
        setTodos(removedArr);
    };
    return (
        <div className="todo">
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="add-btn">
                    Add Todo
                </button>
            </form>
            <div className="todos">
                {todos.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <span>{todo.text}</span>
                        <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoBlack;
