import React from 'react'
import todos from '../reducers/todos';

const TodoNotDone = ({ done, task, datef, datel, notes }) =>
  <tr>
    <td className="c-todo__list_item"
      style={{
        textDecoration: done ? 'line-through' : 'none'
      }}
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
        <input  type="checkbox" checked="false" />
      </span> 
    </td>
    <button >delete</button> 
  </tr>


export default TodoNotDone
