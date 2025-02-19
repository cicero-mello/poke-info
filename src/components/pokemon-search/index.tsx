import { normalizePokemonName, retractMobileKeyboard } from "@utils"
import { useEffect, useRef, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { PokemonSearchProps } from "./types"
import { SearchPokeballIco } from "@assets"
import { useFocusOrigin } from "@hooks"
import * as S from "./styles"
import * as api from "@api"

export const PokemonSearch: FC<PokemonSearchProps> = ({
    label, onFind, tabIndex
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const focusOrigin = useFocusOrigin(inputRef)
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
        else {
            onFind(data.id)
            retractMobileKeyboard()
        }
        setPokemonSearchText("")
    }

    useEffect(() => {
        if(pokemonSearchText) searchPokemon()
    }, [pokemonSearchText])

    return (
        <S.Form
            onSubmit={handleSubmit}
            $focusOrigin={focusOrigin}
        >
            {label && (
                <S.Label
                    children={label}
                    for="pokemon-search-input"
                    tabIndex={-1}
                />
            )}
            <S.InputWrapper>
                <S.Input
                    ref={inputRef}
                    id="pokemon-search-input"
                    spellcheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    tabIndex={tabIndex}
                />
                <S.Button
                    $isLoading={isLoading}
                    tabIndex={tabIndex}
                >
                    <SearchPokeballIco />
                </S.Button>
                {!!showNotFound && <S.NotFoundPopUp />}
            </S.InputWrapper>
        </S.Form>
    )
}
