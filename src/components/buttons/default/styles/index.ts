import styled from "styled-components"
import { ButtonProps } from "../interfaces"
import { 
    componentStylePerTheme, 
    underlineStylePerTheme
} from "./styles"

export const Component = styled.button.attrs(
    ({ theme }) => ({ className: `button-${theme}` })
)<ButtonProps>`

    ${({ theme }) => componentStylePerTheme.get(theme)}

    .button-underline {
        ${({ theme }) => (
            underlineStylePerTheme.get(theme)
            ?? "display: none;"
        )}
    }
`

export const Underline = styled.div.attrs({
    className: "button-underline"
})`
    height: 1px;
    width: 100%;
`
