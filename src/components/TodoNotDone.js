import React from 'react'
import todos from '../reducers/todos';
import { Table, Button } from 'reactstrap';
// const TodoNotDone = ({ done,id, task, datef, datel, notes,deleteClick }) =>
const TodoNotDone = ({ onClick,id, done, task, datef, datel, notes, showPopup, savePopup, show, UpdateModal, deleteClick }) =>
  <tr>
    <td className="c-todo__list_item">
      <span>
        {id}
      </span>
    </td>
    <td className="c-todo__list_item"
    // style={{
    //   textDecoration: done ? 'line-through' : 'none'
    // }}
    >
      <span>
        {task}
      </span>
    </td>

    <td className="c-todo__list_item">
      <span>
        {datef}
      </span>
    </td>
    <td className="c-todo__list_item">
      <span>
        {datel}
      </span>
    </td>
    <td className="c-todo__list_item">
      <span>
        {notes}
      </span>
    </td>
    <td className="c-todo__list_item">
      <span>
        <input type="checkbox" checked={done} />
      </span>
    </td>
    <Button outline color="primary" onClick={deleteClick}>delete</Button>{' '}
    <Button outline color="primary" onClick={showPopup}>showPopup</Button>
    <Button outline color="primary" onClick={savePopup}>savePopup</Button>
  </tr>


export default TodoNotDone
