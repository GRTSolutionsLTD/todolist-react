import { connect } from 'react-redux'
import { toggleTodo, deleteTodo ,onDelete } from '../actions/todoActions'
import { savePopUp, showPopUp } from '../actions/popupActions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  return todos.filter(t => t.done)
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    show:true
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onDeleteClick: id => {
      // dispatch(deleteTodo(id))
      dispatch(onDelete(id))
    },
    onShowPopup: isVisible => {
      if (isVisible)
        dispatch((isVisible))
      else
        dispatch(savePopUp(isVisible))
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
