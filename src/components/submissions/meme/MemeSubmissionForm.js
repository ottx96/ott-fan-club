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

    const [meta, setMeta] = useState({})
    const [image, setImage] = useState({})
    const [success, setSuccess] = useState(false)

    const onDrop = (meta, content) => {
        console.log(meta)
        console.log(content)
        setMeta(meta[0])
        setImage(content[0])
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(meta)
        console.log(image)
        fetch("/", {
            method: "POST",
            body: encode({
                "form-name": "memes",
                "image": meta,
                "name": meta.name,
                "lastModified": meta.lastModified
            })
        }).then(resp => {
            if(!resp.ok) throw new Error('Meme konnte nicht eingereicht werden!')
            return resp.blob
        }).then(() => {setSuccess(true)})
        .catch(e => {alert(e)})
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
                <img src={image} alt="" /> &&
                <div className={styles.success}>
                    <h1 className={styles.successlabel}>✔ Das hat geklappt.</h1>
                </div>}
        </div>
    )
}