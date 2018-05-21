import { connect } from 'react-redux'
import { toggleTodo, deleteTodo,toggleShowTodo} from '../actions/todoActions'
import TodoNotDoneList from '../components/TodoNotDoneList'
import ShowNumTasks from './ShowNumTasks';

const GetShowTodoNotDoneList = (todos) => {
  return todos
}

const mapStateToProps = state => {
  return {
    //some
    todos: GetShowTodoNotDoneList(state.todos)
  }
}


const TodoShowNum = connect(mapStateToProps)(ShowNumTasks)

export default TodoShowNum
