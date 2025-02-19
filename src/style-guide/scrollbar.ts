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
        min-height: ${pxToRem(112)};
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
        min-height: ${pxToRem(68)};
    }
`

const hidden = css`
    ${isFirefox && css`
        scrollbar-color: transparent transparent;
        scrollbar-width: thin;
    `}

    &::-webkit-scrollbar {
        width: 0px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
`

const tinyGray = css`
    ${isFirefox && css`
        scrollbar-color: ${color.cloudGray} transparent;
        scrollbar-width: thin;
    `}

    &::-webkit-scrollbar-track {
        margin-top: ${pxToRem(30)};
        margin-bottom: ${pxToRem(30)};
    }
    &::-webkit-scrollbar-thumb {
        cursor: grab;
        background-color: ${color.cloudGray};
        border-radius: ${pxToRem(6)};
    }
    &::-webkit-scrollbar-thumb:active {
        cursor: grabbing;
    }
    &::-webkit-scrollbar {
        width: ${pxToRem(3)};
    }

`

export const scrollbar = {
    white,
    whiteSmall,
    hidden,
    tinyGray
}
