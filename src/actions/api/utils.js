import AppDispatcher from '../../Dispatcher'

export function asyncAC(type, apiCall) {
    return (...args) => {
        AppDispatcher.dispatch({
            type: `${type}_START`,
            data: { args }
        })

        setTimeout(() => {
            apiCall(...args)
                .done((response) => {
                    AppDispatcher.dispatch({
                        type: `${type}_SUCCESS`,
                        data: { response, args }
                    })
                })
                .fail((error) => {
                    AppDispatcher.dispatch({
                        type: `${type}_FAIL`,
                        data: { error,  args}
                    })
                })
        }, 1000)
    }
}