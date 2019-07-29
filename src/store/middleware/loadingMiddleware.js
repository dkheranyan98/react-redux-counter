import { uiStartLoading, uiStopLoading } from '../ui/actions';

 const loadingMiddleware = store => next => (action) => {
    const nextAction = next(action);
    if (nextAction instanceof Promise) {
        const toggleLoading = (state) => {
            store.dispatch({
                type: state ? store.dispatch(uiStartLoading()) : store.dispatch(uiStopLoading()),
                payload: state,
            });
        };
 
        toggleLoading(true);
        return new Promise((resolve, reject) => {
            return nextAction
                .then((resp) => {
                    toggleLoading(false);
                    resolve(resp);
                })
                .catch((resp) => {
                    toggleLoading(false);
                    reject(resp);
                });
        });
}
return nextAction ;
}
export default loadingMiddleware;