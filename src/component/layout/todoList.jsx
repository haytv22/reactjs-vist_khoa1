import { useState, useRef } from "react";

export default function TodoList() {
    const [task, setTasks] = useState([]);
    const valueRef = useRef("");

    const inputValue = (e) => {
        if (e.target.value.trim() !== "") {
            valueRef.current = e.target.value; // Correctly update the ref's current property
        }
    };

    const handleAddTask = () => {
        if (valueRef.current.trim() !== "") {
            setTasks([...task, valueRef.current]); // Add the current value to the task list
            valueRef.current = ""; // Clear the ref value after adding
        }
    };

    return (
        <div>
            <div className="header">
                <input
                    type="text"
                    onChange={inputValue}
                    placeholder="Enter a task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="content">
                <ul>
                    {task.map((task, index) => (
                        <li key={index}>{task}</li> // Ensure you return the <li> element
                    ))}
                </ul>
            </div>
        </div>
    );
}