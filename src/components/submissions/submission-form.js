import React, { useState } from 'react'
import './submission-form.css'

export default function SubmissionForm() {

    const [name, setName] = useState("")
    const [email, setMail] = useState("")
    const [quote, setQuote] = useState("")

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
                "email": email,
                "quote": quote
            })
        }).then(() => alert("Erfolgreich eingereicht!")).catch(error => alert(error));
        e.preventDefault();
    }

    return (
        <div className="submission">
            <form onSubmit={handleSubmit} name="contact" className="form" netlify>
                <p>
                    <label>Your Name: <input type="text" name="name" value={name} placeholder='(Optional)' onChange={e => {setName(e.target.value)}} /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" value={email} placeholder='(Optional)' onChange={e => {setMail(e.target.value)}} /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message" value={quote} placeholder='"Der Boi ist schon nice."' onChange={e => {setQuote(e.target.value)}}></textarea></label>
                </p>
                <button type="submit">Senden</button>
            </form>
        </div>
    )
}