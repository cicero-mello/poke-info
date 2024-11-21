import { Dispatch, StateUpdater } from "preact/hooks"
import { CurrentSection } from "../../types"
import { PokeApi } from "@types"
import { Ability } from "@api"

export interface MainSectionProps {
    setCurrentSection: Dispatch<StateUpdater<CurrentSection>>
    queryData: MainSectionData
}

interface MainSectionData {
    description: string
    abilities: Ability[]
    weight: number
    height: number
    genera: string
    shape: string
    habitat: string
    eggGroups: string
    pokemonType: PokeApi.PokemonType
}

export interface UseQueriesReponse {
    isLoading: boolean
    data: MainSectionData
}
