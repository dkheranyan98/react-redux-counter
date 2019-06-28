import { types } from './actions';

const initialState = {
    counter: 0,
    random: [],
    data: []
}


const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case types.increment:
                return {
                    ...state,
                    counter: state.counter + action.payload.numb
                }
        case types.decrement:
            return {
                ...state,
                counter: state.counter + action.payload.numb
            }
        case types.fetchData:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state;
    }
}

export default reducer;