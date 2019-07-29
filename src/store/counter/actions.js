export const types = {
    increment: 'increment',
    decrement: 'decrement',
    fetchData: 'fetchData',
    fetchIdData: 'fetchIdData',
    fetchDataUsers: 'fetchDataUsers',
    fetchIdDataUsers: 'fetchIdDataUsers'
}

export const incrementCounter = (numb) => ({
    type: types.increment,
    payload: {
        numb,
    }
})

export const decrementCounter = (numb) => ({
    type: types.decrement,
    payload: {
        numb,
    }
})

export const setFetchedData = (data) => ({
    type: types.fetchData,
    payload: {
        data,
    }
})
export const setFetchedPostUsers = (userData) => ({
    type: types.fetchIdDataUsers,
    payload: {
        userData
    }
})

export const setFetchedDataUsers = (userData) => ({
    type: types.fetchDataUsers,
    payload: {
        userData
    }
})

export const setFetchedPost = (data) => ({
    type: types.fetchIdData,
    payload: {
        data
    }
})


export const fetchData = () => {
    return async dispatch => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const response = await res.json();
            dispatch(setFetchedData(response));
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchIdData = (id) => {
    return async dispatch => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const response = await res.json();
            dispatch(setFetchedPost(response))
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchDataUsers = () => {
    return async dispatch => {
        try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const response = await res.json();
            dispatch(setFetchedDataUsers(response))
        } catch(e) {
            console.log(e)
        }
    }
}

export const fetchIdDataUsers = (id) => {
    return async dispatch => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const response = await res.json();
            dispatch(setFetchedPostUsers(response))
        } catch (e) {
            console.log(e)
        }
    }
}

