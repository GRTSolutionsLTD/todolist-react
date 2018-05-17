


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

export const UpdatePopUp = State => {
  return{
  type: 'UPDATE_POPUP',
  State
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






