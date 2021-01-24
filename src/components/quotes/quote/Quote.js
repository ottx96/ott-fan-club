import React from 'react'
import styles from './Quote.module.css'

export default function Quote({ publisher, quote }) {


    return (
        <div className={styles.quote}>
            <div className={styles.text}>
                <h1>{quote}</h1>
            </div>

            <h3 className={styles.publisher}>
                - {publisher === "" && "Unbekannt"}{publisher}
            </h3>
        </div>
    )
}