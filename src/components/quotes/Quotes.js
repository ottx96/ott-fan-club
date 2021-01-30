import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import styles from './Quotes.module.css'
import Quote from './quote/Quote'

export default function Quotes() {

    const SITE_ID = "d0798c62-bf24-49c9-a7ee-6fe52d403f7c"
    const FORM_ID = "600d5835182c38000865997c"

    const [quotes, setQuotes] = useState([
        {
            data: {
                name: "",
                email: "",
                quote: ""
            }
        }])
    const NetlifyAPI = require('netlify')

    useEffect(() => {
        fetchSubmissions().then(data => {
            setQuotes(data)
        })
    }, [])

    async function fetchSubmissions() {
        const client = new NetlifyAPI('npBCRPCE6SDwLqTh_ijnAw_byN7UnSX4nINPHeM5tN4')
        const submissions = await client.listFormSubmissions({
            form_id: FORM_ID
        })
        return submissions
    }

    let history = useHistory()

    const pushQuotes = e => {
        history.push('/submit/quote') 
    }

    return (
        <div className={styles.quotes}>
            <div className={styles.circle_1}></div>
            <div className={styles.circle_2}></div>
            <div className={styles.circle_3}></div>
            <button className={styles.add} onClick={pushQuotes}>
                +
            </button>
            {quotes.map(q => (
                <Quote publisher={q.name} quote={q.data.quote} />
            ))}
        </div>
    )
}