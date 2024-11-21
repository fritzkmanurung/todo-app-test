import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-waves bg-cover animate-gradient-move flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <header className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-700 animate-wave">To-Do List</h1>
        </header>

        <TodoForm addTodo={addTodo} />

        <div className="flex justify-between gap-2 my-4">
          <button
            className={`w-full py-2 rounded-md ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`w-full py-2 rounded-md ${
              filter === 'completed'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`w-full py-2 rounded-md ${
              filter === 'incomplete'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('incomplete')}
          >
            Incomplete
          </button>
        </div>

        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;