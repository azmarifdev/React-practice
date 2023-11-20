/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './TodoBard.css';

function TodoBard() {
    const [tasks, setTasks] = useState([]);

    const addTask = (event) => {
        event.preventDefault();
        const taskText = event.target.elements.taskInput.value;
        if (taskText) {
            setTasks([...tasks, { text: taskText, completed: false }]);
            event.target.elements.taskInput.value = '';
        }
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.slice();
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.slice();
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="Bard">
            <h1>Todo App</h1>
            <form onSubmit={addTask}>
                <input type="text" name="taskInput" placeholder="Enter a task" />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} />
                        {task.text}
                        <button onClick={() => removeTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoBard;
