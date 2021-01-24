import React from 'react'
import './submission-form.css'

export default function SubmissionForm() {


    return (
        <div className="submission">
            <form name="contact" className="form" netlify>
                <p>
                    <label>Your Name: <input type="text" name="name" placeholder='(Optional)' /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" placeholder='(Optional)' /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message" placeholder='"Der Boi ist schon nice."'></textarea></label>
                </p>
                <button type="submit">Senden</button>
            </form>
        </div>
    )
}