import React from 'react';
import{NavLink} from "react-router-dom"
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <NavLink to="/">Main Page</NavLink>{' '}
                <NavLink to="/smurf-form">New Smurf</NavLink>
            </header>
        )
    }
}

export default NavBar;