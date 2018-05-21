
import { connect } from 'react-redux'
import { toggleTodo,deleteTodo } from '../actions/todoActions'
 import { showPopUp } from '../actions/popupActions'
 import {ShowModal} from '../actions/popupActions'
import TodoNotDoneList from '../components/TodoNotDoneList'

 const getVisibleTodos = (todos, filter) => {

      return todos.filter(t =>!t.done)
 }

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onShowPopup: (isVisible,id) => {
        dispatch(showPopUp(isVisible,id))
   
    },
    isShowModal :(isVisible) => {
      dispatch(ShowModal(true))
    },
    onDeleteClick:id=>{  
      dispatch(deleteTodo(id)) 
      
      }, 
  }
}
const VisibleTodoNotDoneList = connect(mapStateToProps, mapDispatchToProps)(TodoNotDoneList)
export default VisibleTodoNotDoneList
