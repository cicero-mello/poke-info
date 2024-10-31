import { useQuery } from "@tanstack/react-query"
import { useDocumentTitle } from "@hooks"
import { useRoute } from "preact-iso"
import * as api from "@api"

export const Pokemon = () => {
    const  { params } = useRoute()
    const { data, isLoading } = useQuery({
        queryKey: ["getPokemon", params.id],
        queryFn: () => api.getPokemon({ idOrName: params.id }),
    })

    useDocumentTitle(data?.name ??  "Loading Pokemon...")

    return (
        <div>
            <h1> Pokemon: { data?.name ??  "??"} </h1>
            {isLoading ?
                <h3>Loading...</h3> :
                <pre>{JSON.stringify(data, null, 2)}</pre>
            }
        </div>
    )
}
