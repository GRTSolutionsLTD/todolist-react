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
export const onLoad = () => (
  dispatch => {
    fetch('http://localhost:3000/data/')
      .then(response => response.json()
        .then(section => {
          console.log(section)
          dispatch({
            type: types.LOAD_TODO,
            data: section
          })
        }));
  });
export function deleteSetSuccess(id) {
  return {
    type: "DELETE_SET_SUCCESS",
    id,
  };
}
export function onDelete(id) {
  return (dispatch) => {
    fetch(('http://localhost:3000/data/' + id), {
      method: "DELETE",
      body: JSON.stringify(id),
    }).then(response => response)
      .then(id => dispatch(deleteSetSuccess(id)));
  };
}
// export function onAdd(id) {
//   return (dispatch) => {
//     fetch(('http://localhost:3000/data/'), {
//       method: 'POST',
//     }).then((res) => {
//       if (res.ok) {
//         return res.json();
//         body: JSON.stringify({ a: 1, b: 2 })
//       } else {
//         throw new Error('Something went wrong with your fetch');
//       }
//     }).then((json) => {
//       console.log(json);
//     })
//   }
// }
// export function onAdd(id) {
//   fetch('http://localhost:3000/data/', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       id: id,
//       task: 'foo',
//       datef: 'bar',
//       datel: 1
//     })
//   }).then(function (response) {
//     return response.json()
//   }).then(function (obj) {
//     console.log(obj)
//   });
// }
export const onAdd=id=> (
  (dispatch) => {
  let reqBody={    
  id: nextTodoId++,
  task: id.inputTask,
  done: false,
  datef: id.inputDatef,
  datel:id.inputDatel,
  notes: id.inputNotes}
    fetch(('http://localhost:3000/data/'), {
      method: "POST",
      body:JSON.stringify(reqBody)
      })
  })

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
  export const toggleShowTodoNum = () => {
    return {
      type: types.TOGGLE_TODONUM,
    }
  }

  export const toggleShowTodo = () => ({
    type: types.TOGGLESHOW_TODO
  })

  export const deleteTodo = id => {
    return {
      type: types.DELETE_TODO,
      id
    }
  }
