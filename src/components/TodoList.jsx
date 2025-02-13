
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, removeTodo, editTodo }) => {
    return (
        <div className='mt-7'>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete} 
                    removeTodo={removeTodo} 
                    editTodo={editTodo} 
                />
            ))}
        </div>
    );
};

export default TodoList;
