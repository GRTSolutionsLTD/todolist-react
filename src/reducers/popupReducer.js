
// import data from '../actions/TodoList.json';
import todos from '../reducers/todos'
import _ from 'lodash'
// const initialState = {
//     show: false,
//     showModal: false,
//     id:"",
//     task: "",
//     datef: "",
//     datel: "",
//     notes: ""
// }
const popupReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
        var st=_.filter(state, function(o) { return o.id==action.id; })[0];
            return Object.assign({}, state, {
                show: true,
                showModal: true,
                task: st.task,
                datef: st.datef,
                datel: st.datel,
                notes: st.notes,
                id: st.id,
                done:st.done,
            })
        case 'SAVE_POPUP':
            return Object.assign({}, state, {
                showModal: false
            })
        case 'LOAD_TODO2':
            return action.data;
        case 'UPDATE_POPUP': {
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
            return Object.assign({}, state)

    }
}
export default popupReducer


