/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const BlackboxSuggest = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState(0);

    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    const editTodo = (index) => {
        setEdit(true);
        setIndex(index);
        setInput(todos[index]);
    };

    const saveEdit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            let itemsCopy = [...todos];
            itemsCopy[index] = input;
            setTodos(itemsCopy);
            setInput('');
            setEdit(false);
        }
    };

    const deleteTodo = (index) => {
        let itemsCopy = [...todos];
        itemsCopy.splice(index, 1);
        setTodos(itemsCopy);
    };

    return (
        <div className="container mx-auto text-2xl p-8 w-5/12">
            <h1 className="text-4xl mb-8 text-center font-extrabold underline">TODO App</h1>
            <form onSubmit={edit ? saveEdit : addTodo} className="mb-8 flex p-5 bg-slate-400 rounded-xl">
                <input
                    type="text"
                    value={input}
                    placeholder="Write Your TODO..."
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-4">
                    {edit ? 'Save' : 'Add'}
                </button>
            </form>
            <h1 className="text-2xl mb-8 underline text-center">TODO List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className="flex justify-between items-center bg-amber-300 p-5 rounded-xl mb-4">
                        <span>{todo}</span>
                        <div>
                            <button onClick={() => editTodo(index)} className="bg-blue-500 text-white p-2 rounded mr-4">
                                Edit
                            </button>
                            <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white p-2 rounded">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlackboxSuggest;
