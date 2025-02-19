import { versionFloatingCardAnimationClasses } from "./animations/animation-classes"
import { transitionTime } from "@style-guide/transition-time"
import { color } from "@style-guide/color"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const ContentWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .version-image, > .styled-button {
        ${versionFloatingCardAnimationClasses}
    }

    #setted-version{
        pointer-events: none;
        opacity: 0;

        label {
            opacity: 1;
            font-weight: bold;
            padding-bottom: ${pxToRem(16)};
        }
        button {
            border-radius: 50%;
            overflow: hidden;
            height: ${pxToRem(200)};
            width: ${pxToRem(200)};
        }
        button > img {
            height: 100%;
            width: 100%;
            opacity: 1;
            object-fit: cover;
        }
    }

    & > .styled-button {
        position: absolute;
        top: 0;
        left: -${pxToRem(20)};
        height: fit-content;
        opacity: 0;
        margin-left: ${pxToRem(18)};
        z-index: 1;

        .arrow-return-ico {
            height: ${pxToRem(18)};
            width: fit-content;

            * {
                transition: ${transitionTime.fast} linear;
                fill: ${color.whiteAlpha49};
            }
        }

        &:hover{
            .arrow-return-ico *{
                fill: ${color.whiteAlpha70};
            }
        }
    }
`

export const VersionList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(24)};
    height: 100%;
    width: 100%;
    opacity: 0;

    ${versionFloatingCardAnimationClasses}
`

export const Line = styled.span`
    min-width: calc(100% - 60px);
    min-height: ${pxToRem(2)};
    border-radius: ${pxToRem(8)};
    background-color: ${color.shadowGray};
    margin: ${pxToRem(18)} 0 ${pxToRem(6)} 0;
`
