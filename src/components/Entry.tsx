import { useCallback, useState } from "react"
import ButtonBar from "./ButtonBar"
import EntryName from "./EntryName"
import ScoreDisplay from "./ScoreDisplay"

interface EntryProps {
    name: string
}

export default function Entry({ name }: EntryProps) {
    const [score, setScore] = useState(0)

    const addScore = useCallback((score: number) => {
        setScore(s => s + score)
    }, [])

    return (
        <article className="entry">
            <EntryName name={name} />
            <ScoreDisplay score={score} />
            <ButtonBar addScore={addScore} />
        </article>
    )
}

