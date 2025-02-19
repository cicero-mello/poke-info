import { transitionTime } from "@style-guide/transition-time"
import { pageAnimationClasses } from "../../animations"
import { scrollbar } from "@style-guide/scrollbar"
import { animationClasses } from "./animations"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"

export const Component = styled.section.attrs({
    id: "version-section"
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: ${pxToRem(274)};
    max-width: ${pxToRem(680)};
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
    line-height: ${pxToRem(18)};
    text-align: center;
`

export const VersionList = styled.div
<{$hasScroll: boolean}>`
${({ $hasScroll }) => css`
    display: flex;
    gap: ${pxToRem(24)};
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: ${pxToRem(24)};

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
        black ${pxToRem(24)},
        black calc(100% - ${pxToRem(24)}),
        transparent
    );
    -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black ${pxToRem(24)},
        black calc(100% - ${pxToRem(24)}),
        transparent
    );

    ${scrollbar.tinyGray}

    &::-webkit-scrollbar-track {
        margin: 0 ${pxToRem(24)};
    }
    &::-webkit-scrollbar {
        height: ${pxToRem(2)};
    }

    .version-image {
        flex-direction: column-reverse;
        justify-content: center;

        button {
            min-height: ${pxToRem(100)};
        }

        label {
            white-space: nowrap;
            min-width: ${pxToRem(100)};
            text-align: center;
        }

        img {
            user-select: none;
            height: ${pxToRem(100)};
        }

        .image-loader-version-image {
            top: 0;
            height: ${pxToRem(100)};
            width: ${pxToRem(100)};
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
            padding-bottom: ${pxToRem(16)};
            pointer-events: none;
        }
        button {
            border-radius: 50%;
            overflow: hidden;
            height: ${pxToRem(200)};
            width: ${pxToRem(200)};
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
        margin-top: ${pxToRem(12)};
        ${animationClasses}

        .arrow-return-ico {
            height: ${pxToRem(18)};
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
