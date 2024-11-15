import { useVirtualStyleData } from "./use-virtual-style-data"
import { useFetchNextPage } from "./use-fetch-next-page"
import { useVirtualizer } from "@tanstack/react-virtual"
import { useEffect, useRef } from "preact/hooks"
import { PokemonsListProps } from "./types"
import { forwardRef } from "preact/compat"
import { PokeCard } from "@components"
import { RefObject } from "preact"
import * as S from "./styles"

export const PokemonsList = forwardRef<HTMLDivElement, PokemonsListProps>(({
    pokemonsIds, cardMode, hide, handleClickPokeCard, scrollTop,
    fetchNextPage, isFetchingNextPage, hasNextPage
}, ref) => {
    const virtualizedScrollRef = (
        ref as RefObject<HTMLDivElement> ?? useRef<HTMLDivElement>(null)
    )

    const virtualStyleData = useVirtualStyleData({
        virtualizedScrollRef, cardMode
    })

    const rowVirtualizer = useVirtualizer({
        count: pokemonsIds.length,
        getScrollElement: () => virtualizedScrollRef.current,
        estimateSize: () => virtualStyleData.pxVirtualItemHeight,
        overscan: virtualStyleData.overscan,
        lanes: virtualStyleData.lanes
    })

    useEffect(() => {
        rowVirtualizer.measure()
        if(!virtualizedScrollRef.current) return
        virtualizedScrollRef.current.scrollTop = scrollTop ?? 0
    }, [virtualStyleData, scrollTop])

    useFetchNextPage(
        virtualizedScrollRef,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage
    )

    return (
        <S.VirtualizedScroll ref={virtualizedScrollRef} $hide={hide}>
            <S.VirtualizedContainer $totalHeight={rowVirtualizer.getTotalSize()}>
                {rowVirtualizer.getVirtualItems().map((virtualItem) => (
                    <S.VirtualizedItem
                        $virtualStyleData={virtualStyleData}
                        $virtualItem={virtualItem}
                        id={"virtualized-" + pokemonsIds[virtualItem.index]}
                        key={virtualItem.index}
                    >
                        <PokeCard
                            key={virtualItem.key}
                            pokeId={pokemonsIds[virtualItem.index]}
                            cardMode={cardMode}
                            onClick={() => handleClickPokeCard(
                                pokemonsIds[virtualItem.index]
                            )}
                        />
                    </S.VirtualizedItem>
                ))}
            </S.VirtualizedContainer>
        </S.VirtualizedScroll>
    )
})
