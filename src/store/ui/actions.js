export const types = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING',
}

export const uiStartLoading = () => ({
    type: types.START_LOADING,
    payload: {
        loading: true
    }
})

export const uiStopLoading = () => ({
    type: types.STOP_LOADING,
    payload: {
        loading: false
    }
})