import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './MemeSubmissionForm.module.css'
import ImageUploader from 'react-images-upload';


// function encode(data) {
//     const formData = new FormData();
//     for (const key of Object.keys(data)) 
//         formData.append(key, data[key]);    
//     return formData;
// }

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function SubmissionForm() {

    const [picture, setPicture] = useState({})
    const [success, setSuccess] = useState(false)

    const onDrop = (picture, dataURLs) => {
        setPicture(dataURLs[0])
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            body: encode({
                "form-name": "memes",
                image: picture
            })
        }).then(() => setSuccess(true))
    }

    return (
        <div className={styles.submission}>
            {!success && <form onSubmit={handleSubmit} name="memes" className={styles.form} netlify>
                <ImageUploader
                    withIcon={true}
                    buttonText='Meme wählen'
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.svg']}
                    maxFileSize={5242880}
                    singleImage={true}
                    withPreview={true}
                    label={"Maximale Dateigrösse: 5MB\nErlaubte Formate: png, jpg, svg, gif"}
                    labelClass={styles.label}
                />
                <button className={styles.submit} type="submit">Senden</button>
            </form>}

            {success &&
                <div className={styles.success}>
                    <h1 className={styles.successlabel}>✔ Das hat geklappt.</h1>
                </div>}
        </div>
    )

}