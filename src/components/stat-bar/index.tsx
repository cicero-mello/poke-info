import { FunctionComponent as FC } from "preact"
import { statNameToStatLabel } from "./core"
import { StatBarProps } from "./types"
import { useMemo } from "preact/hooks"
import { nanoid } from "nanoid"
import * as S from "./styles"

export const StatBar: FC<StatBarProps> = ({
    statName, value, withLabel, bigMode,
    id: idProps
}) => {
    const id = useMemo(() => {
        return idProps ?? nanoid()
    }, [idProps])

    const label = (
        withLabel || bigMode ?
        statNameToStatLabel(statName, value, bigMode) :
        undefined
    )

    return (
        <S.Component $bigMode={bigMode}>
            <S.LabelWrapper $haveLabel={!!label}>
                {label && (
                    <label
                        children={label}
                        htmlFor={id}
                    />
                )}
            </S.LabelWrapper>
            <S.Progress
                id={id}
                $statName={statName}
                value={value}
                max="200"
                min="0"
            />
        </S.Component>
    )
}
