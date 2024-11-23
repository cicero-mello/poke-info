export interface AbilitiesSectionProps {
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
    pokemonName: string
    otherPokemonsWithThisAbility: {
        name: string
        id: number
    }[]
}