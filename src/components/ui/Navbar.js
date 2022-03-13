import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink} from 'react-router-dom'
import { startLogOut } from '../../action/auth'

export const Navbar = () => {

    const dispatch = useDispatch()
    const name = useSelector(state => state.auth.name)

    const handleLogOut = () => {
        dispatch(startLogOut())
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center">



            <div className="navbar-collapse">
                <div className="navbar-nav text-center">

                    <Link
                        
                        className="navbar-brand hidden-xs mx-1"
                        to="/"
                    >
                        Asociaciones
                    </Link>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link "
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
                    <span className="nav-item nav-link text-info"> {name} </span>
                    <button
                        activeClassName="active"
                        className="nav-item nav-link btnn"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}