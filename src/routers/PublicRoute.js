import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
        
            component={(props) =>
                (!isAuthenticated)
                    ? <Component {...props}/>
                    : <Redirect to="/"/>
            }
        
        />
    )
}

PublicRoute.propType={
    notLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}


