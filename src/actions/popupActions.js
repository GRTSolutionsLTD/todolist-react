
import * as types from '../constants/ActionTypes'
import * as axios from 'axios';

export const showPopUp = (isVisible,id) =>{
  return{
  type: 'SHOW_POPUP',
  isVisible:!isVisible,
  id
  }
}
export const savePopUp = isVisible => {
  return{
  type: 'SAVE_POPUP',
  isVisible
  }
}
export const onLoad2 = () => (
  dispatch => {
    fetch('http://localhost:3000/data/')
      .then(response => response.json()
        .then(section => {
          console.log(section)
          dispatch({
            type: types.LOAD_TODO2,
            data: section
          })
        }));
  });

export const UpdatePopUp=(todo) => (
  dispatch => {
      return axios.put('http://localhost:3000/data/'+todo.id,todo)
          .then(res => {
              console.log("res:  "+res)
              dispatch({ type:types.UPDATE_POPUP, payload: res })
          })
          .catch(err => {
              console.log("error");
          }
      )
  }
)




export const Todo = State => {
  return{
  type: 'TODO',

  }
}

export const ShowModal = isVisible => {
  return{
  type: 'SHOW_MODAL',
  isVisible
  }
}
export const onupDate = id => {
  return{
  type: 'UPDATE_MODAL',
  id
  }
}






