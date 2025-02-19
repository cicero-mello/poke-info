import { transitionTime } from "@style-guide/transition-time"
import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const Spinner = styled.div.attrs({
    className: "spinner"
})<{ $hide?: boolean }>`
${({ $hide }) => css`
    position: absolute;
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    aspect-ratio: 1;
    border-radius: 100%;
    background:
      radial-gradient(farthest-side, ${styleGuide.color.pearlGray} 94%,#0000) top/0.25rem 0.25rem no-repeat,
      conic-gradient(#0000 30%, ${styleGuide.color.pearlGray})
    ;

    mask: radial-gradient(farthest-side,#0000 calc(100% - 0.25rem),#000 0);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 0.25rem),#000 0);

    animation: ${styleGuide.keyframes.rotate} 600ms infinite linear;

    transition: ${transitionTime.medium} linear;
    ${$hide && css`
        opacity: 0;
    `}
`}`
