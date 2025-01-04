import { numbPxToRem } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "move"
})`

`

export const Title = styled.h4`
    font-size: ${numbPxToRem(18)};
`

export const Header = styled.header`
    display: flex;
    gap: ${numbPxToRem(18)};
`