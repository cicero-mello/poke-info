import { FunctionComponent } from "react"
import { ButtonProps } from "./interfaces"
import * as S from "./styles"

export const Button: FunctionComponent <ButtonProps> = ({
    theme, text, ...rest
}) => {

    return (
        <S.Component theme={theme} {...rest}>
            {text ?? rest.children}
        </S.Component>
    )
}
