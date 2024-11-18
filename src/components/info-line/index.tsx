import { FunctionComponent as FC } from "preact"
import { InfoLineProps } from "./types"
import * as S from "./styles"

export const InfoLine: FC<InfoLineProps> = ({
    title, children
}) => (
    <S.Component>
        <S.Title> {title + ":"} </S.Title>
        <S.Info> {children} </S.Info>
    </S.Component>
)
