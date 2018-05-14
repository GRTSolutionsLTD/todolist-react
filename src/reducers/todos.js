import data from '../actions/TodoList.json';

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        task: action.task,
        done: false,
        datef: action.datef,
        datel: action.datel,
        notes: action.notes
      }

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        done: !state.done
      })

    default:
      return state
  }
}

const todos = (state = data, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

export default todos