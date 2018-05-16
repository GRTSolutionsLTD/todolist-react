
// const initialState = {
//     show: false
// }

// const popupReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SHOW_POPUP':
//             return Object.assign({}, state, {
//                 show: true
//             })

//         case 'SAVE_POPUP':
//             return Object.assign({}, state, {
//                 show: true
//             })

//         default:
//             return Object.assign({}, state, initialState)
//     }
// }

// export default popupReducer
import data from '../actions/TodoList.json';
const initialState = {
    show: false,
    showModal:false,
    task:"",
    datef:"",
    datel:"",
    notes:""
}
// const popupReducer = (state =initialState, action){
const popupReducer = (state = data, action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return Object.assign({}, state, {
                show: true,
                showModal: true,
                task:state[action.id].task,
                datef:state[action.id].datef,
                datel:state[action.id].datel,
                notes:state[action.id].notes,
            })
        case 'SAVE_POPUP':
            return Object.assign({}, state, {
                showModal: false
            })
        case 'SHOW_MODAL':
            return Object.assign({}, state, {
                showModal: true
            })
        // case 'UPDATE_MODAL':{
        // return Object.assign({}, state,{ task: action.task})
        // }
        default:
            return Object.assign({}, state, initialState)
       
    }
}
// const popupReducer = (state = data, action) => {
//     switch (action.type) {
//     case 'UPDATE_MODAL':
//         return [...state, popupreducer(state, action)]
//     case 'SHOW_POPUP':
//     return [...state, popupreducer(state, action)]
//     case 'SHOW_MODAL':
//     return [...state, popupreducer(state, action)]
//     case 'SAVE_POPUP':
//     return [...state, popupreducer(state, action)]
//     }
// }
export default popupReducer


