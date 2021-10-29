import React from 'react'
import styles from "./Tutorial.module.css"

const Tutorial = ({ page, setPage }) => {
    return (
        <div>
            hello
            <button onClick={() => setPage(2)}>skip</button>
        </div>
    )
}

export default Tutorial
