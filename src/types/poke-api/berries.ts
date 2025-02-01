import { NamedAPIResource } from "./common"

export interface Berries {
    count: number
	next: string | null
	previous: string | null
    results: NamedAPIResource[]
}
