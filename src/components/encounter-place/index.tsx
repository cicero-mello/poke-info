import { InfoLine } from "@components/info-line"
import { FunctionComponent as FC } from "preact"
import { EncounterPlaceProps } from "./types"
import * as S from "./styles"

export const EncounterPlace: FC<EncounterPlaceProps> = ({
    areaName, method
}) => {
    const showConditions = (
        method.conditions.length > 0
    )

    return (
        <S.Component>
            <S.PlaceName>{areaName}</S.PlaceName>
            <S.MethodWrapper>
                <S.MethodName>{method.name}</S.MethodName>
                <S.Numbers>
                    <InfoLine
                        title="Chance"
                        children={method.chance + "%"}
                        asListItem
                    />
                    <InfoLine
                        title="Min Level"
                        children={method.minLevel}
                        asListItem
                    />
                    <InfoLine
                        title="Max Level"
                        children={method.maxLevel}
                        asListItem
                    />
                </S.Numbers>
                {showConditions && (
                    <S.ConditionWrapper>
                        <S.ConditionTitle>Conditions:</S.ConditionTitle>
                        {method.conditions.map((condition) => (
                            <S.Condition>{condition}</S.Condition>
                        ))}
                    </S.ConditionWrapper>
                )}
            </S.MethodWrapper>
        </S.Component>
    )
}
