export interface GetPokemonsParams {
    page: number,
    limit?: number
}

export interface GetPokemonsResponse {
    pokemonName: string
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
