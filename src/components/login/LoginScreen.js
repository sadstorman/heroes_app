import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    let lastPath = localStorage.getItem('lastPath') || '/'
    const {dispatch} =useContext(AuthContext)

    const handleLogIn = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Juan'
            }
        })
        history.push(lastPath)
    }
    

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogIn}
            >
                Log in
            </button>
        </div>
    )
}
