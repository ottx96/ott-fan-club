import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './SubmissionForm.module.css'

export default function SubmissionForm() {

    let history = useHistory()

    const [name, setName] = useState("")
    const [quote, setQuote] = useState("")
    const [success, setSuccess] = useState(false)

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                "name": name,
                "quote": quote
            })
        }).catch(error => alert(error));
        e.preventDefault();

        setName("");
        setQuote("");
        setSuccess(true)
    }

    return (
        <div className={styles.submission}>
            {!success && <form onSubmit={handleSubmit} name="quotes" className={styles.form} netlify>
                <p>
                    <label>Name: <input type="text" name="name" value={name} placeholder='(Optional)' onChange={e => { setName(e.target.value) }} /></label>
                </p>
                <p>
                    <label>Zitat: <textarea name="quote" value={quote} placeholder='"Der Boi ist schon nice."' onChange={e => { setQuote(e.target.value) }}></textarea></label>
                </p>
                <button type="submit">Senden</button>
            </form>}

            {success &&
                <div className={styles.success}>
                    <h1 className={styles.success}>✔ Das hat geklappt.</h1>
                </div>}
        </div>
    )
}