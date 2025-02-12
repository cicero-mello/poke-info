import { NamedAPIResource, VersionEncounterDetail } from "./common"

export interface PokemonLocationArea {
    location_area: NamedAPIResource
    version_details: VersionEncounterDetail[]
}
