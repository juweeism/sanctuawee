import { useState, useEffect } from "react"
import type { CollectionEntry } from 'astro:content';
import type { string } from "astro/zod";

interface Props {
    tags: string[]
    notes: CollectionEntry<'notes'>[]
}

const Tags = ({ tags, notes }: Props) => {

    const tagList = ['all', ...tags]
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [filteredNotes, setFilteredNotes] = useState(notes)

    useEffect(() => {
        // setFilteredNotes(notes.filter(note => selectedTags.includes(note.data.tags)))
        setFilteredNotes(selectedTags.length === 0 ? notes : notes.filter((note: CollectionEntry<'notes'>) => note.data.tags.some((n: string) => selectedTags.includes(n))))
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

    const Label = ({ label }: { label: string }) => {
        return (
            <p className="text-slate-400 font-bold text-sm mt-9">{label}</p>
        )
    }

    const Tag = ({ tag, selected }: { tag: string, selected: boolean }) => {
        return (
            <li className={`px-3 italic border border-zinc-300 ${selected ? "font-bold bg-black text-white" : "font-normal"}`} onClick={() => handleClick(tag)}>
                {tag}
            </li>
        )
    }

    const TagList = ({ tags }: { tags: string[] }) => {
        return (
            <ul className="flex flex-wrap gap-3 cursor-pointer select-none mt-2 mb-5">
                {
                    tags.map((tag: string, i: number) => (
                        <Tag tag={tag} key={i} selected={(selectedTags.length === 0 && tag === 'all') || selectedTags.includes(tag)} />
                    ))
                }
            </ul>
        )
    }

    const NoteList = ({ notes }: { notes: CollectionEntry<'notes'>[] }) => {
        return (
            <ul className="mt-1 mb-5">
                {
                    notes.map((note: CollectionEntry<'notes'>, i: number) => (
                        <li key={i} className="list-disc pl-3 ml-5"><a className="underline" href={'notes/' + note.slug}> {note.data.title}</a> {note.data.tags.map(t => <span className="text-slate-400 text-sm"> #{t}</span>)}</li>
                    ))
                }
            </ul>
        )
    }

    return (
        <>
            <Label label="TAGS" />
            <TagList tags={tagList} />

            <Label label="NOTES" />
            <NoteList notes={filteredNotes} />
        </>
    )
}

export default Tags
