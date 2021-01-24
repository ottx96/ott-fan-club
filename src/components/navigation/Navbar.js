import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    let history = useHistory()

    const pushQuotes = e => {
        history.push('/submit/quote') 
    }

    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/quotes">Zitate</Link></li>
                <li><Link to="/ratings">Rezensionen</Link></li>
                <li><Link to="/about">Über den Boi</Link></li>
            </ul>
            <button className={styles.create} onClick={pushQuotes}>Zitat erfassen</button>
        </nav>
    )
}
