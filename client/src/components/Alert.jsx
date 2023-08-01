import { ToastContainer } from "react-toastify"
import { useAppContext } from "../context/appContext"


const Alert = () => {

    const { alertType, alertText } = useAppContext()

    return (
        <div className={`alert alert-${alertType}`}>
            {alertText}
            <ToastContainer />


        </div>

    )
}

export default Alert
