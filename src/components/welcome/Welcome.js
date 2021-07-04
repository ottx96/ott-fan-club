import React from 'react'
import styles from './Welcome.module.css'
import NyanCatSection from './sections/hollowknight/HollowKnight'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'

export default function Welcome() {
    return (
        <Container className={styles.welcome}>
            <Row classname={styles.section}>
                <Col>
                    <NyanCatSection />
                </Col>
            </Row>
        </Container>
    )

}
