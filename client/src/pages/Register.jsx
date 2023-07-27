import { useState, useEffect } from "react"
import { Alert, FormRow, Logo } from "../components"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/RegisterPage"


const initialState = {
    name: '',
    password: '',
    email: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    // global state and useNavigate
    const { isLoading, showAlert } = useAppContext()


    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert />}
                {/* name input */}
                {!values.isMember && (
                    <FormRow
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}

                {/* email input */}
                <FormRow
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* passwordl input */}
                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type="submit" className="btn btn-block ">submit
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type="button" onClick={toggleMember} className="member-btn">
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>


            </form>
        </Wrapper>
    )
}

export default Register
