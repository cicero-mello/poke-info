import { FlavorsGraph, InfoLine } from "@components"
import { FunctionComponent as FC } from "preact"
import { BerryContentProps } from "./types"
import * as S from "./styles"

export const BerryContent: FC<BerryContentProps> = ({
    naturalGiftType, smoothness, firmness, size,
    naturalGiftPower, soilDryness, grownTime,
    maxHarvest, flavors, pentagonSize
}) => (
    <S.Component>
        <S.DataList>
            <InfoLine
                title="Natural gift type"
                children={naturalGiftType}
                asListItem
            />
            <InfoLine
                title="Smoothness"
                children={smoothness}
                asListItem
            />
            <InfoLine
                title="Firmness"
                children={firmness}
                asListItem
            />
            <InfoLine
                title="Size"
                children={size + "mm"}
                asListItem
            />
            <InfoLine
                title="Natural gift power"
                children={naturalGiftPower}
                asListItem
            />
            <InfoLine
                title="Soil dryness"
                children={soilDryness}
                asListItem
            />
            <InfoLine
                title="Grown time"
                children={grownTime + "h"}
                asListItem
            />
            <InfoLine
                title="Max harvest"
                children={maxHarvest}
                asListItem
            />
        </S.DataList>
        <FlavorsGraph
            flavors={flavors}
            pentagonSize={pentagonSize}
        />
    </S.Component>
)
