import AppDispatcher from '../../Dispatcher'

export function asyncAC(type, apiCall) {
    return () => {
        AppDispatcher.dispatch({
            type: `${type}_START`
        })

        apiCall()
            .done((response) => {
                AppDispatcher.dispatch({
                    type: `${type}_SUCCESS`,
                    data: { response }
                })
            })
            .fail((error) => {
                AppDispatcher.dispatch({
                    type: `${type}_FAIL`,
                    data: { error }
                })
            })
    }
}