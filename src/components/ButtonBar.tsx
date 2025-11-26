import React from "react"

interface ButtonBarProps {
    addScore: (adder: number) => void
}

const ButtonBar = React.memo(function({ addScore }: ButtonBarProps) {
    const btnElements = [1, 2, 3].map(v => {
        return (
            <button key={v} onClick={() => addScore(v)}>{`+${v}`}</button>
        )
    })
    console.log("Button Bar rerendered")
    return (
        <section className="button-bar">
            {btnElements}
        </section>
    )
})

export default ButtonBar
