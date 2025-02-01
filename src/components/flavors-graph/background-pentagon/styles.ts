import { color } from "@style-guide/color"
import styled from "styled-components"

export const Svg = styled.svg.attrs({
    className: "pentagon"
})`
    .triangle {
        stroke: ${color.silver};
        fill: ${color.blackAlpha25};
        stroke-width: 1px;
    }
`
