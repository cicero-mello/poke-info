import { useEncounterPlaceData } from "./use-encounter-place-data"
import { InfoLine } from "@components/info-line"
import { FunctionComponent as FC } from "preact"
import { EncounterPlaceProps } from "./types"
import * as S from "./styles"

export const EncounterPlace: FC<EncounterPlaceProps> = ({
    areaId, method
}) => {
    const data = useEncounterPlaceData({ areaId, method })

    const showConditions = (
        !!data &&
        data.method.conditions.length > 0
    )

    return (
        <S.Component>
            <S.PlaceName>{data?.areaName}</S.PlaceName>
            <S.MethodWrapper>
                <S.MethodName>{data?.method.name}</S.MethodName>
                <S.Numbers>
                    <InfoLine
                        title="Chance"
                        children={data?.method.chance + "%"}
                        asListItem
                    />
                    <InfoLine
                        title="Min Level"
                        children={data?.method.minLevel}
                        asListItem
                    />
                    <InfoLine
                        title="Max Level"
                        children={data?.method.maxLevel}
                        asListItem
                    />
                </S.Numbers>
                {showConditions && (
                    <S.ConditionWrapper>
                        <S.ConditionTitle>Conditions:</S.ConditionTitle>
                        {data.method.conditions.map((condition) => (
                            <S.Condition>{condition}</S.Condition>
                        ))}
                    </S.ConditionWrapper>
                )}
            </S.MethodWrapper>
        </S.Component>
    )
}
