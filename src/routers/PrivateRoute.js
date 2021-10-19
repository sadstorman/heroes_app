import React from 'react'
import { Redirect } from 'react-router'
import { Route } from "react-router-dom"
import PropTypes from 'prop-types';



export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    if(rest.location.search) {
        localStorage.setItem('lastPath', rest.location.pathname+rest.location.search)
    } else {
        localStorage.setItem('lastPath', rest.location.pathname)
    }

    return (
        <Route {...rest}
        
            component={(props) => (
                ( isAuthenticated)
                    ? <Component {...props}/>
                    : <Redirect to="/login"/>

            )}
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
