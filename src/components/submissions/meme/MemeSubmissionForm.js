import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './MemeSubmissionForm.module.css'
import ImageUploader from 'react-images-upload';

function encode(data) {
    const formData = new FormData();
    for (const key of Object.keys(data))
        formData.append(key, data[key]);
    return formData;
}

export default function SubmissionForm() {

    const [image, setImage] = useState({})
    const [success, setSuccess] = useState(false)

    const onDrop = (picture, dataURLs) => {
        setImage(dataURLs[0])
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            body: encode({
                "form-name": "memes",
                image: image
            })
        }).then(() => setSuccess(true))
    }

    const handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    const handleAttachment = e => {
        setImage(e.target.files[0])
    };

    return (
        <div className={styles.submission}>

            <form
                name="file-upload"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
                <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Your name:<br />
                        <input type="text" name="name" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        File:<br />
                        <input
                            type="file"
                            name="attachment"
                            onChange={handleAttachment}
                        />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            {/* 
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
                </div>} */}
        </div>
    )
}