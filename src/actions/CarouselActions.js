import * as types from '../constants/ActionTypes'

export const Showcarousel = () =>{
  return{
  type: 'SHOW_CAROUSEL',
  isVisible:true,
  }
}
export const Closecarousel = () =>{
  return{
  type: 'CLOSE_CAROUSEL',
  isVisible:false,
  }
}














