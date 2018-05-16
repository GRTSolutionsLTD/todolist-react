import React from 'react'
import Todo from './Todo'
import { Table } from 'reactstrap';

const TodoList = ({ todos,onTodoClick, onDeleteClick, onShowPopup }) =>
  // className="c-todo__list"
  <Table striped>
    <thead>
      <tr>
        <th>#</th>
        <th>Task</th>
        <th>From Date</th>
        <th>To Date</th>
        <th>Notes</th>
        <th>Done</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} showPopup={() => onShowPopup(true)} savePopup={() => onShowPopup(false)} deleteClick={() => onDeleteClick(todo.id)} />)}
      {/* {todos.map(function (movie) {
        return <Todo key={movie.id} {...movie} onClick={() => onTodoClick(movie.id)} />
      })} */}
    </tbody>
  </Table >
export default TodoList
