import { css } from "styled-components"
import { pxToRem } from "./px-to-rem"
import { color } from "./color"

const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1

export const scrollbar = {
    white: css`
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
}
