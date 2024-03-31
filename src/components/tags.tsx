import { useState, useEffect } from "react"

const Tags = ({ tags, notes }) => {

    const tagList = ['all', ...tags]
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [filteredNotes, setFilteredNotes] = useState(notes)

    useEffect(() => {
        // setFilteredNotes(notes.filter(note => selectedTags.includes(note.data.tags)))
        setFilteredNotes(selectedTags.length === 0 ? notes : notes.filter(note => note.data.tags.some(n => selectedTags.includes(n))))
    }, [selectedTags])

    const handleClick = (tag: string) => {
        if (tag === 'all') {
            setSelectedTags([])
        } else if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(item => item !== tag))
        } else {
            setSelectedTags([tag, ...selectedTags.filter(item => item !== 'all')])
        }
    }

    return (
        <>
            <ul className="my-6 flex gap-3 cursor-pointer select-none">
                <span>tags: </span>
                {
                    tagList.map((tag, i) => (
                        selectedTags.length === 0 && tag === 'all' ?
                            <li className="border px-3 bg-black text-white items-center" key={i} onClick={() => handleClick(tag)}>{tag}</li> :
                            selectedTags.includes(tag) ?
                                <li className="border px-3 bg-black text-white items-center" key={i} onClick={() => handleClick(tag)}>{tag}</li> :
                                <li className="border px-3 items-center" key={i} onClick={() => handleClick(tag)}>{tag}</li>
                    ))
                }

            </ul>
            <ul>

                <p> notes</p>
                {
                    filteredNotes.map((note, i) => (
                        <li key={i}><a href={'notes/' + note.slug}>{note.data.title}</a></li>
                    ))
                }
            </ul>
        </>
    )
}

export default Tags
