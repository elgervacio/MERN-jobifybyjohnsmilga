import { CLEAR_ALERT, DISPLAY_ALERT, TOAST_CONTAINER } from "./action"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!'
        }
    }
    if (action.type === TOAST_CONTAINER) {
        return {
            ...state,
            alertType: 'danger',
            alertText: 'Please provide all values!',
            showAlert: true,
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: ''
        }
    }
    throw new Error(`no such action: ${action.type}`)
}

export default reducer