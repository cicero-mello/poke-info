import { EvolutionRequirements, FlatChain, Gender, PokemonEvolution, RelativePhysicalStats } from "./types"
import { capitalizeApiName, extractIdFromUrl } from "@utils"
import { PokeApi } from "@types"

export const convertDataToPokemonsEvolution = (
    data: PokeApi.EvolutionChain
): PokemonEvolution[] => {
    const chain = flatEvolutionChain([data.chain])

    const result: PokemonEvolution[] = chain.map((item) => ({
        specieName: capitalizeApiName(item.species.name),
        specieId: extractIdFromUrl(item.species.url),
        evolvesFrom: item.evolvesFrom,
        isBaby: !!item.is_baby,
        incenseToGetBaby: !!item.is_baby ?
            capitalizeApiName(data.baby_trigger_item?.name ?? "")
            : undefined
        ,
        requirements: item.evolution_details.map((detail) => ({
            trigger: capitalizeApiName(detail.trigger.name),
            gender: getGender(detail.gender ?? 0),
            heldItem: capitalizeApiName(detail.held_item?.name ?? ""),
            item: capitalizeApiName(detail.item?.name ?? ""),
            knowMoveType: detail.known_move_type?.name,
            location: capitalizeApiName(detail.location?.name ?? ""),
            minLevel: detail.min_level,
            minAffection: detail.min_affection,
            minBeauty: detail.min_beauty,
            minHappiness: detail.min_happiness,
            needsOverworldRain: detail.needs_overworld_rain,
            partySpecies: capitalizeApiName(detail.party_species?.name ?? ""),
            partyType: detail.party_type?.name as PokeApi.PokemonType,
            relativePhysicalStats: getRelativePhysicalStats(detail.relative_physical_stats),
            timeOfDay: capitalizeApiName(detail.time_of_day ?? ""),
            tradeSpecie: !!detail?.trade_species ? {
                name: capitalizeApiName(detail.trade_species.name),
                id: extractIdFromUrl(detail.trade_species.url)
            } : undefined,
            turnUpsideDown3DS: detail.turn_upside_down
        } as EvolutionRequirements))
    }))

    return result
}

const getRelativePhysicalStats = (
    relativePhysicalStatsId?: number | null
): RelativePhysicalStats | undefined => {
    if(relativePhysicalStatsId === 1) return "attack > defense"
    if(relativePhysicalStatsId === 0) return "attack === defense"
    if(relativePhysicalStatsId === -1) return "attack < defense"
    return
}

const getGender = (genderId: number): Gender | undefined => {
    if(!genderId) return
    if(genderId === 1) return "male"
    return "female"
}

const flatEvolutionChain = (
    chain: FlatChain[]
): FlatChain[] => {
    const result: FlatChain[] = [...chain]

    chain.forEach(item => {
        if(item.evolves_to.length > 0){
            const flattedItem = flatEvolutionChain(
                item.evolves_to.map(chain => ({
                    ...chain,
                    evolvesFrom: {
                        specieName: capitalizeApiName(item.species.name),
                        specieId: extractIdFromUrl(item.species.url)
                    }
                }))
            )
            result.push(...flattedItem)
        }
    })

    return result
}
