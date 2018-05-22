import _ from 'lodash'
const initialState = {
    isDialogOpen: true
}
const CarouselReduser = (state, action) => {
    switch (action.type) {
        case 'SHOW_CAROUSEL':
            return Object.assign({}, state, {
                isDialogOpen: action.isVisible,
            })
        case 'CLOSE_CAROUSEL':
            return Object.assign({}, state, {
                isDialogOpen: action.isVisible,
            })
        default:
            return Object.assign({}, state)

    }
}
export default CarouselReduser


