import { transitionTime } from "@style-guide/transition-time"
import { pageAnimationClasses } from "../../animations"
import { scrollbar } from "@style-guide/scrollbar"
import { animationClasses } from "./animations"
import styled, { css } from "styled-components"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"

export const Component = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: ${numbPxToRem(274)};
    max-width: ${numbPxToRem(680)};
    color: ${color.pearlGray};

    .version-image {
        ${animationClasses}
    }

    opacity: 0;
    ${pageAnimationClasses}
`

export const VersionListWrapper = styled.div`
    opacity: 0;
    width: 100%;
    ${animationClasses}
`

export const Title = styled.h2`
    ${text.lg}
    line-height: ${numbPxToRem(18)};
    text-align: center;
`

export const VersionList = styled.div
<{$hasScroll: boolean}>`
${({ $hasScroll }) => css`
    display: flex;
    gap: ${numbPxToRem(24)};
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: ${numbPxToRem(24)};

    ${$hasScroll && css`
        user-select: none;
        cursor: grab;

        &:active {
            cursor: grabbing;
        }
    `}

    mask-image: linear-gradient(
        to right,
        transparent,
        black ${numbPxToRem(24)},
        black calc(100% - ${numbPxToRem(24)}),
        transparent
    );
    -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black ${numbPxToRem(24)},
        black calc(100% - ${numbPxToRem(24)}),
        transparent
    );

    ${scrollbar.tinyGray}

    &::-webkit-scrollbar-track {
        margin: 0 ${numbPxToRem(24)};
    }
    &::-webkit-scrollbar {
        height: ${numbPxToRem(2)};
    }

    .version-image {
        flex-direction: column-reverse;
        justify-content: center;

        button {
            min-height: ${numbPxToRem(100)};
        }

        label {
            white-space: nowrap;
            min-width: ${numbPxToRem(100)};
            text-align: center;
        }

        img {
            user-select: none;
            height: ${numbPxToRem(100)};
        }

        .image-loader-version-image {
            top: 0;
            height: ${numbPxToRem(100)};
            width: ${numbPxToRem(100)};
        }
    }
`}`

export const SettedVersionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .version-image {
        opacity: 0;
        label {
            opacity: 1;
            font-weight: bold;
            padding-bottom: ${numbPxToRem(16)};
            pointer-events: none;
        }
        button {
            border-radius: 50%;
            overflow: hidden;
            height: ${numbPxToRem(200)};
            width: ${numbPxToRem(200)};
            pointer-events: none;
        }
        button > img {
            height: 100%;
            width: 100%;
            opacity: 1;
            object-fit: cover;
        }
    }

    & > .styled-button {
        opacity: 0;
        margin-top: ${numbPxToRem(12)};
        ${animationClasses}

        .arrow-return-ico {
            height: ${numbPxToRem(18)};
            * {
                transition: ${transitionTime.fast} linear;
                fill: ${color.whiteAlpha70};
            }
        }

        &:hover {
            .arrow-return-ico * {
                fill: ${color.whiteAlpha94};
            }
        }
    }
`
