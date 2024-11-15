import { css } from "styled-components"
import { pxToRem } from "./px-to-rem"
import { color } from "./color"

const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1

const white = css`
    ${isFirefox && css`
        scrollbar-color: ${color.mistGray} transparent;
        scrollbar-width: thin;
    `}

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        cursor: grab;
        border-radius: 6px;
        background: ${color.mistGray};
        min-height: ${pxToRem("112px")};
    }

    &::-webkit-scrollbar-thumb:active {
        cursor: grabbing;
    }
`

const whiteSmall = css`
    ${white}

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        min-height: ${pxToRem("68px")};
    }
`

export const scrollbar = {
    white,
    whiteSmall
}
