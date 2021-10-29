import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./LetsStart.module.css"

const LetsStart = ({ page, setPage }) => {
    return (
        <div className={styles.container}>
            <h1>Let's Start</h1>
            <Button className="buttonClass" onClick={() => setPage(3)} size="lg">Start</Button>
        </div>
    )
}

export default LetsStart
