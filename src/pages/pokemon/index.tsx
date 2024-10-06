import { useDocumentTitle } from "@hooks"
import { useState } from "preact/hooks"
import { useRoute } from "preact-iso"

export const Pokemon = () => {
    const  { params } = useRoute()
    const [state, setState] = useState("Loading Pokemon...")
    useDocumentTitle(state)

    return (
        <div>
            <h1> Pokemon: { params.id } </h1>
            <button onClick={() => setState("Bulbasaur")}>
                click
            </button>
        </div>
    )
}
