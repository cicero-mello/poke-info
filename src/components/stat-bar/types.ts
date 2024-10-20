import { PokeApi } from "@types"

export interface StatBarProps {
    id?: string
    statName: PokeApi.StatName
    withLabel?: boolean
    value?: number
    bigMode?: boolean
}
