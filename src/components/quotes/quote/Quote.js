import React from 'react'
import styles from './Quote.module.css'

export default function Quote( {publisher, quote} ) {


    return (
        <div className={styles.quote}>
            <h1 className={styles.text}>
                {quote}
            </h1>
            <h3 className={styles.publisher}>
                {publisher}
            </h3>
        </div>
    )
}