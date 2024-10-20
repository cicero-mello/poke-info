import { PokeApi } from "@types"

export const statNameToStatLabel = (
    statName: PokeApi.StatName,
    statValue?: number,
    bigMode?: boolean
) => {
    if(statName === "hp"){
        return `HP: ${statValue}`
    }

    if(statName === "attack"){
        return `Attack: ${statValue}`
    }

    if(statName === "defense"){
        return `Defense: ${statValue}`
    }

    if(statName === "speed"){
        return `Speed: ${statValue}`
    }

    if(statName === "special-attack"){
        return (
            bigMode ?
            `Special Attack: ${statValue}` :
            `Sp. Atk: ${statValue}`
        )
    }

    if(statName === "special-defense"){
        return (
            bigMode ?
            `Special Defense: ${statValue}` :
            `Sp. Def: ${statValue}`
        )
    }
}
