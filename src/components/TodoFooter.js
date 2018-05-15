import { connect } from 'react-redux'
import { toggleTodo, deleteTodo,toggleShowTodo} from '../actions/todoActions'
// import { savePopUp, showPopUp } from '../actions/popupActions'
import TodoNotDoneList from '../components/TodoNotDoneList'
import TodoList from './TodoList';

const GetShowTodoNotDoneList = (todos) => {
  return todos
}

const mapStateToProps = state => {
  return {
    todos: GetShowTodoNotDoneList(state.todos)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowTodoClick()
    {
      dispatch(toggleShowTodo())
    }
  }
}

const TodoFooter = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoFooter
