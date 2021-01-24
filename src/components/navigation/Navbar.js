import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {


    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/quotes">Zitate</Link></li>
                <li><Link to="/memes">Memes</Link></li>
                <li><Link to="/about">Über den Boi</Link></li>
            </ul>
        </nav>
    )
}
