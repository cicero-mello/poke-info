import { FunctionComponent as FC } from "preact"
import { DamageClassTagProps } from "./types"
import * as S from "./styles"

export const DamageClassTag: FC<DamageClassTagProps> = ({
    damageClass
}) => (
    <S.Component>
        {damageClass.toUpperCase()}
    </S.Component>
)
