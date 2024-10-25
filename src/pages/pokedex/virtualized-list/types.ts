import { GetPokemonsResponse } from "@api"
import { PokeCardMode } from "@components/poke-card/types"
import { RefObject } from "preact"

export interface VirtualizedListProps {
    pokemons: GetPokemonsResponse[]
    cardMode: PokeCardMode
}

export interface useVirtualStyleDataParams {
    virtualizedScrollRef: RefObject<HTMLDivElement>,
    cardMode: PokeCardMode
}

export interface GetVirtualStyleDataParams {
    virtualizedScroll: {
        pxWidth: number
        pxPaddingX: number
        pxGapX: number
        pxGapY: number
    }
    item: {
        pxWidth: number
        pxHeight: number
    }
}

export interface VirtualStyleData {
    virtualItemWidth: string
    pxVirtualItemHeight: number
    percentLeftForEachVirtualItemInARow: string[]
    overscan: number
    lanes: number
}
