import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div
      className={`flex items-center justify-between p-3 bg-gray-100 rounded-md mb-2 ${
        todo.completed ? 'line-through text-gray-400' : ''
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5"
        />
        <span>{todo.text}</span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
