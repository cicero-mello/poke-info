import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const Item = styled.span`
    position: absolute;
    white-space: nowrap;
    text-align: center;
    font-weight: bold;
    ${text.xl}
    color: ${color.pearlGray};
`
