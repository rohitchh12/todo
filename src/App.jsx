import React, { useState } from "react";
import TodoList from "./components/TodoList";
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue) return; 

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-20 mb-20 ">
      <div className="bg-green-400 w-full max-w-lg h-auto rounded-4xl p-5">
        <div className="flex justify-center mb-5">
          <h1 className="text-4xl text-gray-800">To-Do List</h1>
        </div>
        <div className="flex justify-center mb-5">
          <form onSubmit={addTodo} className="flex flex-col md:flex-row items-center gap-3 w-full">
            <input
              className="bg-gray-300 rounded-3xl p-4 w-full md:w-[300px] text-center"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task"
            />
            <button className='bg-gray-700 text-white p-2 rounded-3xl hover:bg-blue-400 hover:text-gray-900' type="submit">Add</button>
          </form>
        </div>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo} 
        />
      </div>
    </div>
  );
};

export default App;
