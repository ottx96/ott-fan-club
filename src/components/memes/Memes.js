import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import styles from './Memes.module.css'
// import Meme from './meme/Meme'

export default function Memes() {

    let history = useHistory();
    const submitMeme = e => {
        history.push("/submit/meme")
    }

    return (
        <div className={styles.memes}>
            <p className={styles.header}>Hier gibt's noch nichts zu sehen!<br/>Es dürfen aber schon Memes hochgeladen werden. 😉</p>
            <button className={styles.add} onClick={submitMeme}>Meme hochladen</button>
        </div>
    )
}