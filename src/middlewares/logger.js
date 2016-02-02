export default store => next => action => {
    console.log('before action: ', store.getState());
    console.log('dispatch action: ', action);
    next(action)
    console.log('after action', store.getState())
}