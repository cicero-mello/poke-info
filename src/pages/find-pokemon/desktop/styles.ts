import { versionFloatingCardAnimationClasses } from "./animations/animation-classes"
import { dimensions } from "@style-guide/dimensions"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Screen = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100svh - ${dimensions.headerHeight});
    max-width: ${dimensions.headerContainerWidth};
    height: 100%;
    width: 100%;
    padding: ${pxToRem(52)};
    align-self: center;
    color: white;
    overflow: hidden;

    > div:nth-child(2), > div:nth-child(3) {
        max-width: 0;
        max-height: 0;
        margin-left: 0;
        padding-right: 0;
        opacity: 0;
        ${versionFloatingCardAnimationClasses}
    }

    #no-encounters-floating-card {
        padding: 0 !important;
        & > div {
            padding: 0;
            border-radius: ${pxToRem(12)};
            overflow: hidden;
        }
    }
`
