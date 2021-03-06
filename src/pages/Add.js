import React from 'react'
import { Helmet } from 'react-helmet'
import TodoFooter from '../components/TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Pop from '../containers/Pop'
import VisibleTodoNotDoneList from './../containers/VisibleTodoNotDoneList'

const Add = () => [
  <Helmet>
    <meta
      name="description"
      content="React Redux example demonstrates how to implement todo list!"
    />
  </Helmet>,
  <main className="p-todo">
    <h3 className="p-todo__title">Add to do list</h3>
    
    {/* <TodoFooter /> */}
    <AddTodo/>
  </main>
]
export default Add