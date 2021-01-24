import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/quotes">Zitate</Link></li>
                <li><Link to="/ratings">Rezensionen</Link></li>
                <li><Link to="/about">Über den Boi</Link></li>
            </ul>
            <button className="create">Zitat erfassen</button>
        </nav>
    )
}