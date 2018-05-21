<<<<<<< HEAD

// export default popupReducer
=======
import _ from 'lodash'
>>>>>>> 2fd7e1beed68e72783417835ca38e1eb96fb9163
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
<<<<<<< HEAD
                done:state[action.id].done,
=======
                done:state[action.id].done
>>>>>>> 2fd7e1beed68e72783417835ca38e1eb96fb9163
            })
        case 'SAVE_POPUP':
            return Object.assign({}, state, {
                showModal: false
            })
<<<<<<< HEAD
    
        case 'TODO':{

=======
        case 'UPDATE_POPUP':{
            debugger;
          
            return Object.assign({}, state, {
                done: true
            })
>>>>>>> 2fd7e1beed68e72783417835ca38e1eb96fb9163
        }
        case 'SHOW_MODAL':
            return Object.assign({}, state, {
                showModal: true
            })
        default:
            return Object.assign({}, state, initialState)

    }
}
<<<<<<< HEAD
=======

>>>>>>> 2fd7e1beed68e72783417835ca38e1eb96fb9163
export default popupReducer


