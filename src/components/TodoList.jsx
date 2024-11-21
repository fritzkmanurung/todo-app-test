import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available. Add one!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;