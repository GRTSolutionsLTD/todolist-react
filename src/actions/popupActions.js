
import * as types from '../constants/ActionTypes'

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

export const UpdatePopUp = State => {
  return{
  type: 'UPDATE_POPUP',
  State
  }
}

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






