import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todoActions'
// import { savePopUp, showPopUp } from '../actions/popupActions'
import TodoNotDoneList from '../components/TodoNotDoneList'

 const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//   //  case 'SHOW_ALL':
//   //  return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.done)
//     case 'SHOW_ACTIVE':
      return todos.filter(t => !t.done)
    // default:
    //   break

//     // case 'SHOW_COMPLETED':
//     //   return todos.filter(t => t.done)
//     // case 'SHOW_ACTIVE':
//     //   return todos.filter(t => !t.done)
//     // default:
//     //   break
//   }
 }

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos,undefined /*state.visibilityFilter*/)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    // onShowPopup: isVisible => {
    //   if (isVisible)
    //     dispatch(showPopUp(isVisible))
    //   else
    //     dispatch(savePopUp(isVisible))
    // }
  }
}

const VisibleTodoNotDoneList = connect(mapStateToProps, mapDispatchToProps)(TodoNotDoneList)

export default VisibleTodoNotDoneList
