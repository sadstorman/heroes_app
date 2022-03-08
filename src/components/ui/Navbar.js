import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)
    const history = useHistory()

    const handleLogOut = () => {
        dispatch({
            type: types.logout
        }
        )
        history.push('/login')
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center">



            <div className="navbar-collapse">
                <div className="navbar-nav text-center">

                    <Link
                        className="navbar-brand hidden-xs "
                        to="/"
                    >
                        Asociaciones
                    </Link>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link btn"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-info"> {user.name} </span>
                    <button
                        activeClassName="active"
                        className="nav-item nav-link btn"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}