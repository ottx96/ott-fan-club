import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import styles from './Navbar.module.css'

export default function Navbar({ active }) {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/" activeKey={active}>
            <Nav.Item>
                <Nav.Link href="/">Startseite</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/quotes">Zitate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/memes">Memes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">Über den Boi</Nav.Link>
            </Nav.Item>
        </Nav>
        // <nav className={styles.nav}>
        //     <ul>
        //         <li><Link to="/">Startseite</Link></li>
        //         <div className={styles.separator}><p /></div>
        //         <li><Link to="/quotes">Zitate</Link></li>
        //         <div className={styles.separator}><p /></div>
        //         <li><Link to="/memes">Memes</Link></li>
        //         <div className={styles.separator}><p /></div>
        //         <li><Link to="/about">über den Boi</Link></li>
        //     </ul>
        // </nav>
    )
}
