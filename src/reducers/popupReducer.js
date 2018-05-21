
import data from '../actions/TodoList.json';
import _ from 'lodash'
const initialState = {
    show: false,
    showModal: false,
    id:"",
    task: "",
    datef: "",
    datel: "",
    notes: ""
}
const popupReducer = (state = data, action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return Object.assign({}, state, {
                show: true,
                showModal: true,
                task: state[action.id].task,
                datef: state[action.id].datef,
                datel: state[action.id].datel,
                notes: state[action.id].notes,
                id:state[action.id].id,
                done:state[action.id].done,
            })
        case 'SAVE_POPUP':
            return Object.assign({}, state, {
                showModal: false
            })
    
        case 'TODO':{

        }
        case 'UPDATE_POPUP':{
            debugger;
            return Object.assign({}, state, {
                done: true
            })
        }
        case 'SHOW_MODAL':
            return Object.assign({}, state, {
                showModal: true
            })
        default:
            return Object.assign({}, state, initialState)

    }
}
export default popupReducer


