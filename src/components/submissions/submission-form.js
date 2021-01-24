import React from 'react'
import './submission-form.css'

export default function SubmissionForm() {


    return (
        <div className="container">
            <form className="submission" netlify>
                <div className="inputs">
                    <textarea placeholder='"Der Boi ist schon echt nice."' name="quote" id="" cols="30" rows="10" className="quote"></textarea>
                </div>
                <button className="submit">Abschicken</button>
            </form>
        </div>
    )
}