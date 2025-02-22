import { NoEncountersSectionProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useEffect, useRef } from "preact/hooks"
import { startRicochet } from "cm-ricochet"
import * as S from "./styles"

export const NoEncountersSection: FC<NoEncountersSectionProps> = ({
    componentRef
}) => {
    const itemRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (!componentRef.current || !itemRef.current) return
        const stopRicochet = startRicochet({
            container: componentRef.current as HTMLElement,
            item: itemRef.current,
            horizontalSpeed: 100,
            verticalSpeed: 50
        })
        return stopRicochet
    }, [])

    return (
        <S.Component ref={componentRef}>
            <S.Item ref={itemRef}>
                There's no direct <br />encounters
            </S.Item>
        </S.Component>
    )
}
