import React from 'react'

const GameOver = () => {
    const score = localStorage.getItem("score")
    return (
        <div>
            Game Over
            Your score: {score}
        </div>
    )
}

export default GameOver
