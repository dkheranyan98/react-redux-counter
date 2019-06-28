export const types = {
    increment: 'increment',
    decrement: 'decrement',
    fetchData: 'fetchData'
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
    type: '',
    payload: {
        data,
    }
})

export const fetchData = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((response) => {
                dispatch(setFetchedData(response))
            })
            .catch(e => console.log(e))
    }
}

