import React from 'react'
import TodoNotDone from './TodoNotDone'
const TodoList = ({ todos, onTodoClick }) =>
  <table className="c-todo__list">
    <thead />
    <tbody>
      {todos.map(todo => <TodoNotDone key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}  />)}
    </tbody>
</table>
export default TodoList