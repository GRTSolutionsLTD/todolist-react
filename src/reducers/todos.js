// import data from '../actions/TodoList.json';
import _ from 'lodash'
// function update(state, payload) {
//   // console.log(state, payload)
//   return state.id !== payload.id ? state : payload;
// }
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
      case 'DELETE_TODO1':
      {
        // _.remove(state, { id: action.id });
        return state;
      }
     case "DELETE_SET_SUCCESS":
     {
        return action.id;
     }
      case "ADD_SET_SUCCESS":
       {
        // data: [...state.data, action.payload]
        return state;
       }    
       case 'UPDATE_POPUP':
       {    
    //    return {
    //     data: [...state.data.map((state) => update(state, action.payload))],
    //     FilterList: [...state.FilterList.map((state) => update(state, action.payload))]
    // };
  }
    // case 'UPDATE_POPUP':
    //   {
        
    //     _.setWith(state, '[' + action.todo.id + ']' + '.done', true, state);
    //     return _.setWith(state, '[' + action.todo.id + ']', action.todo, state);
    //   }
    case 'TOGGLESHOW_TODO':
      {
        return state
      }
    case 'LOAD_TODO':
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

const todos = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    case 'DELETE_TODO':
      return todo(state, action)
      case 'DELETE_TODO1':
      return todo(state, action)
    case 'TOGGLESHOW_TODO':
      return todo(state)
    case 'UPDATE_POPUP':
      return todo(state, action)
    case 'LOAD_TODO':
      return todo(action.data, action);
      case 'DELETE_SET_SUCCESS':
      return todo(state = '', action);
        case 'ADD_SET_SUCCESS':
        return todo(state , action);
    default:
      return state
  }
}

export default todos

       