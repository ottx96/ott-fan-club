import React from 'react'
import './submission-form.css'

export default function SubmissionForm() {


    return (
        <div className="container">
            <form className="submission" netlify>
                <div className="inputs">
                    <input name="quote" type="text" placeholder='"Der Boi ist schon echt nice."'/>
                </div>
                <button type="submit" className="submit">Abschicken</button>
            </form>
        </div>
    )
}