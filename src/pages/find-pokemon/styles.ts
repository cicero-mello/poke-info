import { dimensions } from "@style-guide/dimensions"
import styled, { css } from "styled-components"
import { numbPxToRem } from "@style-guide"
import { PageStep } from "./types"

export const Screen = styled.div
<{$pageStep: PageStep}>`
${({ $pageStep }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100svh - ${dimensions.headerHeight});
    max-width: ${dimensions.headerContainerWidth};
    height: 100%;
    width: 100%;
    padding: ${numbPxToRem(52)};
    align-self: center;
    color: white;

    > div:nth-child(2) {
        max-width: 0;
        margin-left: 0;
        opacity: 0;
        transition: 400ms ease-in-out;
    }

    ${($pageStep === "2" || $pageStep === "3") && css`
        > div:nth-child(2) {
            max-width: ${numbPxToRem(340)};
            margin-left: 24px;
            opacity: 1;
        }
    `}
`}`
