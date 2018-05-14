
const initialState = {
    show: false
}

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return Object.assign({}, state, {
                show: true
            })

        case 'SAVE_POPUP':
            return Object.assign({}, state, {
                show: true
            })

        default:
            return Object.assign({}, state, initialState)
    }
}

export default popupReducer
