import React from 'react'
import Java from './sections/java/Java'
import Kotlin from './sections/kotlin/Kotlin'
import styles from './Skills.module.css'

export default function Skills() {
    return (
        <div className={styles.sections}>
            <div className={styles.header}>
                <h1>Skills</h1>
            </div>
            <Kotlin />
            <Java />
            <Kotlin />
            <Java />
            <Kotlin />
            <Java />
        </div>
    )

}
