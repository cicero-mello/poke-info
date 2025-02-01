import { color } from "@style-guide/color"
import styled, { css } from "styled-components"

export const Svg = styled.svg
<{ $pentagonSize: number }>`
${({ $pentagonSize }) => css`
    position: absolute;
    display: flex;
    top: 2.5%;

    width: ${$pentagonSize};
    height: ${$pentagonSize};

    > polygon {
        fill: ${color.blueBerryAlpha80};
        border: 1px solid ${color.blueBerryAlpha80};
    }
`}`
