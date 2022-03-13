import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { login } from '../action/auth';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)

            } else {
                setIsLoggedIn(false)
            }
            setTimeout(() => {
                setChecking(false)
            }, 2000);
        });
    }, [dispatch, setChecking, setIsLoggedIn])
    return (
        <Router >
            <div>
                <Switch>
                    {

                        isLoggedIn ?
                            (
                                <>
                                    < Route  path="/" component={DashboardRoutes} />
                                    <Redirect to="/marvel" />

                                </>
                            )
                            :
                            (
                                <>
                                    <Route path="/auth" component={AuthRouter} />
                                    <Redirect to="/auth/login" />
                                </>
                            )


                    }
                </Switch>
            </div>
        </Router>
    )
}
