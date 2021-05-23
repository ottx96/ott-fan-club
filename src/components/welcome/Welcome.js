import React from 'react'
import Navbar from '../navigation/Navbar'
import styles from './Welcome.module.css'

export default function Welcome() {

    return (
        <div className={styles.welcome}>
            <h1 className={styles.greeting}>
                This site is currently under construction!
            </h1>
        </div>
    )

}
