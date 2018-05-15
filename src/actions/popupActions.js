
export const showPopUp = isVisible =>{
  return{
  type: 'SHOW_POPUP',
  isVisible
  }
}
export const savePopUp = isVisible => {
  return{
  type: 'SAVE_POPUP',
  isVisible
  }
}


