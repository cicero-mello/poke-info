import { FunctionComponent as FC } from "preact"
import { InfoButtonProps } from "./types"
import * as S from "./styles"

// TODO prop anchor
export const InfoButton: FC<InfoButtonProps> = ({
    children, onClick
}) => (
    <S.Component onClick={onClick}>
        <S.Text> {children} </S.Text>
        <S.HiddenText aria-hidden="true">
            {children}
        </S.HiddenText>
    </S.Component>
)
