import { FunctionComponent as FC } from "preact"
import { InfoLineProps } from "./types"
import * as S from "./styles"

export const InfoLine: FC<InfoLineProps> = ({
    title, children, asListItem
}) => asListItem ? (
    <S.LiComponent>
        <S.Title> {title + ":"} </S.Title>
        <S.Info> {children} </S.Info>
    </S.LiComponent>
) : (
    <S.Component>
        <S.Title> {title + ":"} </S.Title>
        <S.Info> {children} </S.Info>
    </S.Component>
)
