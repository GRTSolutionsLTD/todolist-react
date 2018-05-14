import * as types from '../constants/ActionTypes'

let nextTodoId = 5
export const addTodo = st => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    task: st.inputTask,
    done: false,
    datef: st.inputDatef,
    datel: st.inputDatel,
    notes: st.inputNotes
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}
