interface EntryNameProps {
    name: string
}

export default function EntryName({ name }: EntryNameProps) {
    return (
        <section className="entry-name">
            <span className="entry-name-text">{name}</span>
        </section>
    )
}
