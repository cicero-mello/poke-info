import { dimensions } from "@style-guide/dimensions"
import { scrollbar } from "@style-guide/scrollbar"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"
import { pxToRem } from "@style-guide"

export const Screen = styled.main.attrs({
    id: "screen"
})`
    display: flex;
    flex-direction: column;
    background: ${color.onyxAlpha83};
    width: 100%;
    height: calc(100svh - ${dimensions.headerHeight});
    padding: 28px 24px;
    color: ${color.pearlGray};
    align-items: center;
    gap: ${pxToRem(32)};

    overflow-y: scroll;
    ${scrollbar.hidden}
`

export const PageName = styled.h1`
    ${text["2xl"]}
    align-self: flex-start;
`
