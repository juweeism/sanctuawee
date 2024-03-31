import { useStore } from "@nanostores/react"
import { selectedTags } from "../stores/tagStore"

const Notes = () => {
    const $selectedTags = useStore(selectedTags)
    return (
        <div>
            {$selectedTags}
        </div>
    )
}

export default Notes
