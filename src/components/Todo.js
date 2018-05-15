import React from 'react'
import todos from '../reducers/todos';
import { Table } from 'reactstrap';

const Todo = ({ onClick, done,id, task, datef, datel, notes,showPopup,savePopup,deleteClick }) =>
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
    <button onClick={deleteClick}>delete</button> 
    <button onClick={showPopup}>showPopup</button>
    <button onClick={savePopup}>savePopup</button>
  </tr>


export default Todo

