import { types } from './actions';

const initialState = {
    loading: false,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.START_LOADING:
        case types.STOP_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;