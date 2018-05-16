import React from 'react'
// import Todo from './../Todo'
import TodoNotDone from './TodoNotDone'
import { Table, Button } from 'reactstrap';
// const TodoNotDoneList = ({todos,onTodoClick ,onDeleteClick }) =>
const TodoNotDoneList = ({todos,onTodoClick,onShowPopup,isShowModal ,onupDate,onDeleteClick}) =>
<Table striped>
<thead>
  <tr>
    <th>#</th>
    <th>Task</th>
    {/* <th>From Date</th>
    <th>To Date</th>
    <th>Notes</th> */}
    <th>Done</th>
  </tr>
</thead>
<tbody>
      {/* {todos.map(todo => <TodoNotDone key={todo.id} {...todo}  deleteClick={()=>onDeleteClick(todo.id)} />)}  */}
     {/* <h2> yttyytyfgdgfgdfgggfg</h2> */}
     {todos.map(todo => <TodoNotDone key={todo.id} {...todo} showPopup={() => onShowPopup(true,todo.id)} savePopup={() => onShowPopup(false)} show={()=>isShowModal(true)}
       UpdateModal={()=>onupDate(todo.id)} deleteClick={()=>onDeleteClick(todo.id)} />)} 
    </tbody>
</Table>
// TodoNotDoneList = connect(state => ({
//   TodoNotDoneListState: state.todos
// })
// )(TodoNotDoneList)
export default TodoNotDoneList
