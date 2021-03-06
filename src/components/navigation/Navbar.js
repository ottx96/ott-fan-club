import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <div className={styles.separator}><p /></div>
                <li><Link to="/quotes">Zitate</Link></li>
                <div className={styles.separator}><p /></div>
                <li><Link to="/memes">Memes</Link></li>
                <div className={styles.separator}><p /></div>
                <li><Link to="/about">über den Boiiiiiiiiiiiiiiiiwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Link></li>
            </ul>
        </nav>
    )
}
