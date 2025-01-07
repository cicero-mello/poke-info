import { useEffect, useRef, useState } from "preact/hooks"
import { useQuery } from "@tanstack/react-query"
import { PokemonSearchProps } from "./types"
import { SearchPokeballIco } from "@assets"
import { normalizePokemonName } from "@utils"
import { FunctionComponent as FC } from "preact"
import * as S from "./styles"
import * as api from "@api"

export const PokemonSearch: FC<PokemonSearchProps> = ({
    label, onFind
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [pokemonSearchText, setPokemonSearchText] = useState("")
    const [showNotFound, setShowNotFound] = useState(false)

    const { refetch, isLoading } = useQuery({
        queryKey: ["getPokemon", pokemonSearchText],
        queryFn: () => api.getPokemon({ idOrName: pokemonSearchText }),
        enabled: false,
        retry: false
    })

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        setShowNotFound(false)
        const newPokemonId = normalizePokemonName(
            inputRef?.current?.value.trimEnd()  ?? ""
        )
        setPokemonSearchText(newPokemonId)
    }

    const searchPokemon = async () => {
        const { isError, data } = await refetch()
        if(isError || !data?.id) setShowNotFound(true)
        else onFind(data.id)
        setPokemonSearchText("")
    }

    useEffect(() => {
        if(pokemonSearchText) searchPokemon()
    }, [pokemonSearchText])

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
