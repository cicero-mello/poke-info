import { NoEncountersFloatingCardProps, } from "./types"
import { FunctionComponent as FC } from "preact"
import { useEffect, useRef } from "preact/hooks"
import { startRicochet } from "cm-ricochet"
import { FloatingCard } from "@components"
import * as S from "./styles"

export const NoEncountersFloatingCard: FC<NoEncountersFloatingCardProps> = ({
    componentRef
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const itemRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if(!containerRef.current || !itemRef.current) return
        const stopRicochet = startRicochet({
            container: containerRef.current,
            item: itemRef.current,
            horizontalSpeed: 100,
            verticalSpeed: 50
        })
        return stopRicochet
    }, [])

    return (
        <FloatingCard
            title="Places"
            componentRef={componentRef}
            id="no-encounters-floating-card"
        >
            <S.Container ref={containerRef}>
                <S.Item ref={itemRef}>
                    There's no direct <br/>encounters
                </S.Item>
            </S.Container>
        </FloatingCard>
    )
}
