import React from 'react'
import styles from './Welcome.module.css'
import NyanCatSection from './sections/nyancat/NyanCat'
import LandingSection from './sections/landing/Landing'
import arrow from './arrow.png'

export default function Welcome() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <LandingSection />
                <div className={styles.glass}>
                    <h1>Manuel Ott</h1>
                    <h2>Technical Developer</h2>
                    <div className={styles.social}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
                        <img src="https://allfacebook.de/wp-content/uploads/2020/02/ig-logo-bw.png" alt="" />
                        <img src="https://image.flaticon.com/icons/png/512/49/49656.png" alt="" />
                        <img src="https://image.flaticon.com/icons/png/512/48/48910.png" alt="" />
                    </div>
                </div>

                {/* Free, absolute positioning */}
                <div className={styles.continue}>
                    <a href="#skills"><img src={arrow} alt="" /></a>
                </div>
            </div>
        </div>
    )

}
