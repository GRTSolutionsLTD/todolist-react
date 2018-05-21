import React from 'react'
import Todo from './Todo'
import { Table } from 'reactstrap';

const TodoList = ({ show,todos,onTodoClick, onDeleteClick, onShowPopup }) =>
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
      {todos.map(todo => <Todo key={todo.id} {...todo} showDelete={show} onClick={() => onTodoClick(todo.id)} showPopup={() => onShowPopup(true)} savePopup={() => onShowPopup(false)} deleteClick={() => onDeleteClick(todo.id)} />)}
    </tbody>
  </Table >
export default TodoList
