import data from '../actions/TodoList.json';
import _ from 'lodash'

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

    case 'TOGGLE_TODO': {
      if (state.id !== action.id) {
        return state
      }
      else {
        return Object.assign({}, state, {
          done: false
        })
      }
    }
    case 'DELETE_TODO':
      {
        _.remove(state, { id: action.id });
        return state;
      }
      case 'UPDATE_POPUP':
      {
        debugger;
        _.setWith(state,'['+action.State.id+']'+'.done', true, state);
        return _.setWith(state,'['+action.State.id+']', action.State, state);
      }
    case 'TOGGLESHOW_TODO':
      {
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
    case 'DELETE_TODO':
      return todo(state, action)
    case 'TOGGLESHOW_TODO':
      return todo(state)
    case 'UPDATE_POPUP':
      return todo(state,action)
    default:
      return state
  }
}

export default todos