import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

// const init = () => {
//     return JSON.parse(localStorage.getItem('user')) || {logged: false}
// }

export const HeroesApp = () => {
    

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>

    )
}
