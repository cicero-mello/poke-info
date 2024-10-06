import { FC } from "react"
import { useRoute } from "preact-iso"
import { useDocumentTitle } from "@hooks"
import { useState } from "preact/hooks"

export const Pokemon: FC = () => {
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
