import { FunctionComponent as FC } from "preact"
import { FloatingCardProps } from "./types"
import * as S from "./styles"

export const FloatingCard: FC<FloatingCardProps> = ({
    title, children, componentRef, id
}) => (
    <S.Component ref={componentRef} id={id}>
        <S.Title>{title}</S.Title>
        <S.Content>{children}</S.Content>
    </S.Component>
)
