import React from 'react'
import styles from './Welcome.module.css'
import NyanCatSection from './sections/nyancat/NyanCat'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'

export default function Welcome() {
    return (
        <div className={styles.container}>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
            <section className={styles.snap}></section>
        </div>
    )

}
