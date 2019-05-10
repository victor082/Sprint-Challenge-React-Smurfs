import React from 'react';
import{NavLink} from "react-router-dom"
import './navbar.css'

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <h3>React Smurf</h3>
                <NavLink to="/">Main Page</NavLink>{' '}
                <NavLink to="/smurf-form">Add Smurf</NavLink>
            </header>
        )
    }
}

export default NavBar;