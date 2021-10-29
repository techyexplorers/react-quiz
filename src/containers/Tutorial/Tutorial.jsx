import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./Tutorial.module.css"

const Tutorial = ({ page, setPage }) => {
    return (
        <div className={styles.container}>
            <h1>Tutorial</h1>
            <Button className="buttonClass" onClick={() => setPage(2)} size="lg">Skip</Button>
        </div>
    )
}

export default Tutorial
