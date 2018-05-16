import React from 'react'
import todos from '../reducers/todos';
import { Table, Button } from 'reactstrap';

const Todo = ({showDelete, onClick, done, id, task, datef, datel, notes, showPopup, savePopup, deleteClick }) =>
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
        <input onClick={onClick} type="checkbox" checked={done} />
      </span>
    </td>
   {showDelete&& <Button outline color="primary" onClick={deleteClick}>delete</Button>}{' '}
    {/* <Button outline color="secondary" onClick={showPopup}>update</Button>{' '}
    <Button outline color="success" onClick={savePopup}>close</Button> */}
  </tr>


export default Todo

