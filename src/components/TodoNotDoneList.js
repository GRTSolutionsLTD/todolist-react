import React from 'react'
// import Todo from './../Todo'
import TodoNotDone from './TodoNotDone'

const TodoNotDoneList = ({todos,onTodoClick  }) =>
  <table className="c-todo__list">
    <thead />
    <tbody>
      {todos.map(todo => <TodoNotDone key={todo.id} {...todo}   />)} 
     <h2> yttyytyfgdgfgdfgggfg</h2>
    </tbody>
</table>
// TodoNotDoneList = connect(state => ({
//   TodoNotDoneListState: state.todos
// })
// )(TodoNotDoneList)
export default TodoNotDoneList
