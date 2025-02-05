import { BackgroundPentagon } from "./background-pentagon"
import { StatsPentagon } from "./stats-pentagon"
import { FunctionComponent as FC } from "preact"
import { FlavorsGraphProps } from "./types"
import { FlavorText } from "./flavors-text"
import { getRootFontSize } from "@utils"
import { useMemo } from "preact/hooks"
import * as S from "./styles"

export const FlavorsGraph: FC<FlavorsGraphProps> = ({
    pentagonSize = 170,
    flavors, animationTime, animationDelay
}) => {
    const spicy = flavors?.find(item => item.name === "spicy")?.potency
    const dry = flavors?.find(item => item.name === "dry")?.potency
    const sweet = flavors?.find(item => item.name === "sweet")?.potency
    const bitter = flavors?.find(item => item.name === "bitter")?.potency
    const sour = flavors?.find(item => item.name === "sour")?.potency

    const pentagonSizePxLikeRem = useMemo(() => (
        pentagonSize / 16 * getRootFontSize()
    ), [])

    return (
        <S.Component>
            <BackgroundPentagon pentagonSize={pentagonSizePxLikeRem} />
            <StatsPentagon
                pentagonSize={pentagonSizePxLikeRem}
                spicy={spicy}
                dry={dry}
                sweet={sweet}
                bitter={bitter}
                sour={sour}
                animationTime={animationTime}
                animationDelay={animationDelay}
            />
            <FlavorText
                spicy={spicy}
                dry={dry}
                sweet={sweet}
                bitter={bitter}
                sour={sour}
            />
        </S.Component>
    )
}
