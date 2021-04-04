import styled from "styled-components"
import { ButtonProps } from "./interfaces"

export const Component = styled.button.attrs(
    ({ theme }) => ({ className: `button-${theme}` })
)<ButtonProps>``
