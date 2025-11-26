interface ScoreDisplayProps {
    score: number
}

export default function ScoreDisplay({ score }: ScoreDisplayProps) {
    return (
        <section className="score-display" >
            <span className="score-text">{score}</span>
        </section>
    )
}
