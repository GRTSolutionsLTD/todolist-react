import React from 'react'
import Todo from './Todo'
import { Table } from 'reactstrap';

const ShowNumTasks = ({ todos }) =>
  <center><h1>{todos.length}</h1></center>
  
export default ShowNumTasks
