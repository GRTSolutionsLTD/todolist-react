import React from 'react'
import todos from '../reducers/todos';
import { Table, Button } from 'reactstrap';
const TodoNotDone = ({ onClick,id, done, task, datef, datel, notes, showPopup, savePopup, UpdateModal, deleteClick }) =>
  <tr>
    <td className="c-todo__list_item">
      <span>
        {id}
      </span>
    </td>
    <td className="c-todo__list_item">
      <span>
        {task}
      </span>
    </td>
    <td className="c-todo__list_item">
      <span>
        <input type="checkbox" onClick={showPopup} checked={done} />
      </span>
    </td>
    <Button outline color="primary" onClick={deleteClick}>delete</Button>{' '}
  </tr>


export default TodoNotDone
