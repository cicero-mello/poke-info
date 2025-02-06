import { FunctionComponent as FC } from "preact"
import { FlavorsTextProps } from "./types"
import * as S from "./styles"

export const FlavorText: FC<FlavorsTextProps> = ({
    spicy = 0, dry = 0, sweet = 0, bitter = 0, sour = 0,
    alwaysShowStatsValue
}) => (
    <S.Component $alwaysShowStatsValue={alwaysShowStatsValue}>
        <S.Flavor
            children="SPICY"
            $potency={spicy}
        />
        <S.Flavor
            children="DRY"
            $potency={dry}
        />
        <S.Flavor
            children="SWEET"
            $potency={sweet}
        />
        <S.Flavor
            children="BITTER"
            $potency={bitter}
        />
        <S.Flavor
            children="SOUR"
            $potency={sour}
        />
    </S.Component>
)
