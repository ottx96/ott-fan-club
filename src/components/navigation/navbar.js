import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li><a href="">Startseite</a></li>
                <li><a href="hall-of-fame">Zitate</a></li>
                <li><a href="ratings">Bewertungen</a></li>
                <li><a href="about">Über mich</a></li>
            </ul>
            <button className="create">Zitat erfassen</button>
        </nav>
    )
}