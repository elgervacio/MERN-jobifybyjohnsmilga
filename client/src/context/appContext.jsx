import React, { useReducer, useContext } from 'react'

import reducer from './reducer'

import { CLEAR_ALERT, DISPLAY_ALERT, TOAST_CONTAINER } from './action'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    const showToastMessage = () => {
        toast.error('Please Provide all values!', {
            position: toast.POSITION.TOP_RIGHT,

        });
        dispatch({ type: TOAST_CONTAINER })
    };



    return <AppContext.Provider value={{
        ...state,
        displayAlert,
        showToastMessage
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {
    AppProvider, initialState, useAppContext
}

