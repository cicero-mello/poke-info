import { numbPxToRem } from "./px-to-rem"
import { css } from "styled-components"

export const focusOutline = css`
    outline: ${numbPxToRem(4)} solid #f34343;
    outline-offset: ${numbPxToRem(4)};
    border-radius: ${numbPxToRem(2)};
`
