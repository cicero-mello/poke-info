import { useEffect, useRef, useState } from "preact/hooks"
import { useQuery } from "@tanstack/react-query"
import { PokemonSearchProps } from "./types"
import { SearchPokeballIco } from "@assets"
import { normalizePokemonId } from "@utils"
import { FunctionComponent as FC } from "preact"
import * as S from "./styles"
import * as api from "@api"

export const PokemonSearch: FC<PokemonSearchProps> = ({
    label, onFind
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [pokemonId, setPokemonId] = useState("")
    const [showNotFound, setShowNotFound] = useState(false)

    const { refetch, isLoading } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ id: pokemonId }),
        enabled: false,
        retry: false
    })

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        setShowNotFound(false)
        const newPokemonId = normalizePokemonId(
            inputRef?.current?.value ?? ""
        )
        setPokemonId(newPokemonId)
    }

    const searchPokemon = async () => {
        const { isError } = await refetch()
        if(isError) setShowNotFound(true)
        else onFind(pokemonId)
        setPokemonId("")
    }

    useEffect(() => {
        if(pokemonId) searchPokemon()
    }, [pokemonId])

    return (
        <S.Form onSubmit={handleSubmit}>
            {label && (
                <S.Label
                    children={label}
                    for="pokemon-search-input"
                />
            )}
            <S.InputWrapper>
                <S.Input
                    ref={inputRef}
                    id="pokemon-search-input"
                    spellcheck={false}
                />
                <S.Button $isLoading={isLoading}>
                    <SearchPokeballIco />
                </S.Button>
                {!!showNotFound && <S.NotFoundPopUp />}
            </S.InputWrapper>
        </S.Form>
    )
}
