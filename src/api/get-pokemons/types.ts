export interface GetPokemonsParams {
    page: number,
    limit?: number
}

export interface GetPokemonsResponse {
    pokemonName: string
    pokemonId: number
}

export interface GetPokemonsApiResponse {
    count: number,
	next: string | null,
	previous: string | null,
	results: {
        name: string,
        url: string
    }[]
}
