import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Memes.module.css'
// import Meme from './meme/Meme'

export default function Memes() {

    const NetlifyAPI = require('netlify')
    const [memes, setMemes] = useState([
        {}
    ])

    useEffect(() => {
        fetchMemes().then(data => {
            setMemes(data)
        })
    }, [])

    async function fetchMemes() {
        const client = new NetlifyAPI('npBCRPCE6SDwLqTh_ijnAw_byN7UnSX4nINPHeM5tN4')
        const submissions = await client.listFormSubmissions({
            form_id: "60159960e83a710007f0df6b"
        })
        return submissions
    }

    let history = useHistory();
    const submitMeme = e => {
        history.push("/submit/meme")
    }

    return (
        <div className={styles.memes}>
            {/* {memes.map(m => 
                <img src={m.data.image.url} alt=""/>
            )} */}
            <p className={styles.header}>Hier gibt's noch nichts zu sehen!<br />Es dürfen aber schon Memes hochgeladen werden. 😉</p>
            <button className={styles.add} onClick={submitMeme}>Meme hochladen</button>
        </div>
    )
}