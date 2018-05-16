import React from 'react'
import TodoNotDone from './TodoNotDone'
import { Table, Button } from 'reactstrap';
const TodoNotDoneList = ({todos,onTodoClick,onShowPopup,isShowModal ,onupDate,onDeleteClick}) =>
<Table striped>
<thead>
  <tr>
    <th>#</th>
    <th>Task</th>
    <th>Done</th>
  </tr>
</thead>
<tbody>
     {todos.map(todo => <TodoNotDone key={todo.id} {...todo} showPopup={() => onShowPopup(true,todo.id)} savePopup={() => onShowPopup(false)} show={()=>isShowModal(true)}
       UpdateModal={()=>onupDate(todo.id)} deleteClick={()=>onDeleteClick(todo.id)} />)} 
    </tbody>
</Table>
export default TodoNotDoneList
