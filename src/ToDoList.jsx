import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./store/todoSlice";

const ToDoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <ul className="list-disc pl-6">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`${
                        todo.completed ? "line-through text-gray-400" : ""
                    } mb-2 flex items-center`}
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleTodo(todo.id)}
                        className="mr-2"
                    />
                    <span className="flex-1">{todo.text}</span>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 rounded"
                        onClick={() => handleDeleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;
