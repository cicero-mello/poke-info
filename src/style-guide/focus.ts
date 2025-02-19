import { css } from "styled-components"
import { pxToRem } from "./px-to-rem"
import { color } from "./color"

export const focusOutline = css`
    outline: ${pxToRem(4)} solid ${color.outline};
    outline-offset: ${pxToRem(4)};
    border-radius: ${pxToRem(2)};
`
