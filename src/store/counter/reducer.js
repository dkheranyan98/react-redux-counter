import { types } from './actions';

const initialState = {
    counter: 0,
    random: [],
    data: [],
    users: [],
    post: {
        userId: null,
        id: null,
        title: '',
        body: ''
    }
}


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
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
        case types.fetchIdData:
            return {
                ...state,
                post: action.payload.data,
            }
        case types.fetchDataUsers:
            return {
                ...state,
                users: action.payload.userData
            }
        case types.fetchIdDataUsers:
            return {
                ...state,
                post: action.payload.userData
            }
        default:
            return state;
    }
}

export default reducer;