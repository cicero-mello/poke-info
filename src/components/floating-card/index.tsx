import { FunctionComponent as FC } from "preact"
import { FloatingCardProps } from "./types"
import * as S from "./styles"

export const FloatingCard: FC<FloatingCardProps> = ({
    title, children
}) => (
    <S.Component>
        <S.Title>{title}</S.Title>
        <S.Content>{children}</S.Content>
    </S.Component>
)
