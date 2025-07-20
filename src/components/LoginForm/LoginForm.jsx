import React, { useState } from 'react'
import buttonStyles from '..//ButtonStyles/ButtonStyles.module.css'
import formStyles from './LoginForm.module.css'

const LoginForm = () => {

    const [logState, setLogState] = useState('')
    const [pasState, setPasState] = useState('')
    const [error, setError] = useState(false)
    const [authState, setAuthState] = useState('')


    const loginButtonHandler = () => {
        if (logState && pasState) {
            setError(false)
            setAuthState(logState)
            setLogState('')
            setPasState('')
            console.log(logState, pasState);

        } else {
            setError(true)
        }

    }


    const logoutButtonHandler = () => {
        setAuthState('')
        setLogState('')
        setPasState('')
    }



    const logInputHandler = (event) => {
        setLogState(event.target.value)
    }

    const pasInputHandler = (event) => {
        setPasState(event.target.value)
    }

    return (
        <>
            <div className={formStyles.authForm}>

                <div className={formStyles.inputsAndButton}>

                    <input className={formStyles.input} type="text" placeholder='Login' value={logState} onChange={logInputHandler} />
                    <input className={formStyles.input} type="password" placeholder='Password' value={pasState} onChange={pasInputHandler} />

                    <button className={buttonStyles.buttonLogInOut} onClick={authState ? logoutButtonHandler : loginButtonHandler}>
                        {authState ? 'Logout' : 'Login'}</button>

                </div>

                {authState && <p>Hello, {authState}! 🖐️ </p>}
                {error && <p>🙃 Oops! Please complete all fields.</p>}
            </div>


        </>
    )
}

export default LoginForm