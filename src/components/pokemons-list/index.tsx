import { useVirtualStyleData } from "./use-virtual-style-data"
import { useVirtualizer } from "@tanstack/react-virtual"
import {  useEffect, useRef } from "preact/hooks"
import { RefObject } from "preact"
import { PokemonsListProps } from "./types"
import { PokeCard } from "@components"
import * as S from "./styles"
import { forwardRef } from "preact/compat"

export const PokemonsList = forwardRef<HTMLDivElement, PokemonsListProps>(({
    pokemons, cardMode, hide
}, ref) => {
    const virtualizedScrollRef = ref as RefObject<HTMLDivElement> ?? useRef<HTMLDivElement>(null)

    const virtualStyleData = useVirtualStyleData({
        virtualizedScrollRef, cardMode
    })

    const rowVirtualizer = useVirtualizer({
        count: pokemons.length,
        getScrollElement: () => virtualizedScrollRef.current,
        estimateSize: () => virtualStyleData.pxVirtualItemHeight,
        overscan: virtualStyleData.overscan,
        lanes: virtualStyleData.lanes
    })

    useEffect(() => {
        rowVirtualizer.measure()
    }, [virtualStyleData])

    return (
        <S.VirtualizedScroll ref={virtualizedScrollRef} $hide={hide}>
            <S.VirtualizedContainer $totalHeight={rowVirtualizer.getTotalSize()}>
                {rowVirtualizer.getVirtualItems().map((virtualItem) => (
                    <S.VirtualizedItem
                        $virtualStyleData={virtualStyleData}
                        $virtualRow={virtualItem}
                        id={"virtualized-" + pokemons[virtualItem.index].pokemonName}
                        key={virtualItem.index}
                    >
                        <PokeCard
                            key={virtualItem.key}
                            pokeId={pokemons[virtualItem.index].pokemonName}
                            cardMode={cardMode}
                        />
                    </S.VirtualizedItem>
                ))}
            </S.VirtualizedContainer>
        </S.VirtualizedScroll>
    )
})
