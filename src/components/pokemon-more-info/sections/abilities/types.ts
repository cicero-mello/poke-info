export interface AbilitiesSectionProps {
    pokemonName: string
    queryData: MainSectionData
}

export interface UseQueriesResponse {
    isLoading: boolean
    data: MainSectionData
}

export interface MainSectionData {
    name: string
    description: string
    isHidden: boolean
    otherPokemonsWithThisAbility: {
        name: string
        id: number
    }[]
}