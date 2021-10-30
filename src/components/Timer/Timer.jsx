import React from 'react'
import styles from "./Timer.module.css"

const Timer = ({ timer, setTimer }) => {
    return (
        <div>
            timer: {timer}
        </div>
    )
}

export default Timer
