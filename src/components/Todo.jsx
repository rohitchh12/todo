
import React, { useState } from 'react';

const Todo = ({ todo, toggleComplete, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    const handleEdit = () => {
        editTodo(todo.id, editValue);
        setIsEditing(false);
    };

    return (
        <div className='flex flex-col md:flex-row justify-between items-center bg-white p-2 mt-2 rounded-lg shadow-md'>
            {isEditing ? (
                <>
                    <input 
                        className='bg-white text-gray-800 border-gray-400 rounded-md border p-2 w-full'
                        type="text" 
                        value={editValue} 
                        onChange={(e) => setEditValue(e.target.value)} 
                    />
                    <button 
                        className='bg-blue-400 text-white rounded-md p-2 ml-2 hover:bg-blue-800'
                        onClick={handleEdit}
                    >
                        Save
                    </button>
                </>
            ) : (
                <>
                    <span className={`text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
                    <div className='flex flex-row gap-1'>
                        <button 
                            className='bg-blue-400 text-white rounded-md p-2 hover:bg-gray-500'
                            onClick={() => toggleComplete(todo.id)}
                        >
                            Toggle
                        </button>
                        <button 
                            className='bg-red-400 text-white rounded-md p-2 hover:bg-red-600'
                            onClick={() => removeTodo(todo.id)}
                        >
                            Remove
                        </button>
                        <button 
                            className='bg-yellow-300 text-gray-800 rounded-md p-2 hover:bg-orange-400'
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Todo;
