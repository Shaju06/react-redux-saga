import React from "react"
import './style.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <ul>
                <li>
                    <Link to={'/'}>
                        Note List
                    </Link>
                </li>
                <li>
                    <Link to={'/add-new-note'}>
                        Add New Notes
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header