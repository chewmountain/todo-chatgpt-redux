import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import { toggleTheme } from "./store/themeSlice";
import ToDoList from "./ToDoList";

function App() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    const handleAddTodo = () => {
        if (text) {
            dispatch(
                addTodo({
                    id: Date.now(),
                    text,
                    completed: false,
                })
            );
            setText("");
        }
    };

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div
            className={`mx-auto px-4 py-4 h-screen ${
                darkMode ? "bg-gray-800 text-white" : ""
            }`}
        >
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Todo List</h1>
                <button
                    className={`${
                        darkMode ? "bg-gray-700" : "bg-gray-300"
                    } hover:bg-gray-400 text-gray-800 font-bold px-4 py-2 rounded`}
                    onClick={handleToggleTheme}
                >
                    {darkMode ? "Light" : "Dark"} Mode
                </button>
            </div>
            <div className="flex mb-4">
                <input
                    className="border border-gray-400 mr-2 px-4 py-2 flex-1 text-black"
                    type="text"
                    placeholder="Enter a task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                    onClick={handleAddTodo}
                >
                    Add
                </button>
            </div>
            <ToDoList />
        </div>
    );
}

export default App;
