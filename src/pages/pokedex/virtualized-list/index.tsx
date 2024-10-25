import { useVirtualStyleData } from "./use-virtual-style-data"
import { useVirtualizer } from "@tanstack/react-virtual"
import {  useEffect, useRef } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { VirtualizedListProps } from "./types"
import { PokeCard } from "@components"
import * as S from "./styles"

export const VirtualizedList: FC<VirtualizedListProps> = ({
    pokemons, cardMode
}) => {
    const virtualizedScrollRef = useRef<HTMLDivElement>(null)
    const virtualStyleData = useVirtualStyleData({
        virtualizedScrollRef, cardMode
    })

    const rowVirtualizer = useVirtualizer({
        count: pokemons.length,
        getScrollElement: () => virtualizedScrollRef.current,
        estimateSize: () => virtualStyleData?.pxVirtualItemHeight ?? 0,
        overscan: 5,
        lanes: virtualStyleData?.percentLeftForEachVirtualItemInARow.length
    })

    useEffect(() => {
        rowVirtualizer.measure()
        console.log(virtualStyleData)
    }, [virtualStyleData])

    return (
        <S.VirtualizedScroll ref={virtualizedScrollRef}>
            <S.VirtualizedContainer $totalHeight={rowVirtualizer.getTotalSize()}>
                {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                    <S.VirtualizedItem
                        $virtualStyleData={virtualStyleData}
                        $virtualRow={virtualRow}
                        id={"virtualized-item-" + virtualRow.key.toString()}
                        key={virtualRow.index}
                    >
                        <PokeCard
                            key={virtualRow.key}
                            pokeId={pokemons[virtualRow.index].pokemonName}
                            cardMode={cardMode}
                        />
                    </S.VirtualizedItem>
                ))}
            </S.VirtualizedContainer>
        </S.VirtualizedScroll>
    )
}
