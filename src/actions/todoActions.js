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

export const onPut = person => (
  dispatch => {
    let content = { id: nextTodoId++, task: person.inputTask, done: false, datef: person.inputDatef, datel: person.inputDatel, notes: person.inputNotes };
    fetch('http://localhost:3000/data/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
  });

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
  return (dispatch) => {
    fetch(('http://localhost:3000/data/' + id), {
      method: "DELETE",
      body: JSON.stringify(id),
    })
  };
}

