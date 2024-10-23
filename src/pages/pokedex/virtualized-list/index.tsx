import { useVirtualizer } from "@tanstack/react-virtual"
import { FunctionComponent as FC } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"
import { VirtualizedListProps } from "./types"
import { PokeCard } from "@components"
import * as S from "./styles"
import { getVirtualStyleData, VirtualStyleData } from "./core"
import { debounce } from "@utils"

export const VirtualizedList: FC<VirtualizedListProps> = ({
    pokemons, cardMode
}) => {
    const [virtualStyleData, setVirtualStyleData] = useState<VirtualStyleData>()

    const parentRef = useRef<HTMLDivElement>(null)
    const rowVirtualizer = useVirtualizer({
        count: pokemons.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 256 + 36, // 36 é o gap (margin-bottom)
        overscan: 5,
        lanes: virtualStyleData?.percentLeftForEachItemInARow.length
    })

    useEffect(() => {
        const onResize = () => {
            const newVirtualStyleData = getVirtualStyleData({
                pxScrollableElementWidth: parentRef.current?.offsetWidth ?? 0,
                pxScrollableElementPaddingX: 48,
                pxCardWidth: 160,
                pxCardPaddingX: 36
            })
            setVirtualStyleData(newVirtualStyleData)
        }
        const onResizeDebounced = debounce(onResize, 300)
        onResizeDebounced()
        window.addEventListener("resize", onResizeDebounced)
        return () => window.removeEventListener("resize", onResizeDebounced)
    }, [])

    useEffect(() => {
        if(virtualStyleData) {
            console.log(virtualStyleData)
            rowVirtualizer.measure()
        }
    }, [virtualStyleData])

    return (
        <S.VirtualizedScroll ref={parentRef}>
            <S.VirtualizedContainer
                $totalHeight={rowVirtualizer.getTotalSize()}
            >
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
