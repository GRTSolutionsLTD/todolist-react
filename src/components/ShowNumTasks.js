import React from 'react'
import Todo from './Todo'
import { Table } from 'reactstrap';

const ShowNumTasks = ({ todos }) =>
  <div>{todos.length}</div>
  
export default ShowNumTasks
