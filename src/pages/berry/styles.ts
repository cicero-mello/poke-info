import { transitionTime } from "@style-guide/transition-time"
import { berryAnimationClasses } from "./animation"
import { scrollbar } from "@style-guide/scrollbar"
import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"

export const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;
    max-width: ${styleGuide.dimensions.headerContainerWidth};
    padding: ${pxToRem(52)};
    align-self: center;
    color: white;

    @media (max-width: ${pxToRem(860)}), (max-height: ${pxToRem(680)}){
        padding: 0;
        main {
            max-width: unset;
        }

        .berry-window {
            border-radius: 0;
            outline: none;
            max-height: unset;
            height: 100%;
        }

        .berries-header {
            padding: ${pxToRem(18)} ${pxToRem(24)} ${pxToRem(24)} ${pxToRem(24)};
            > h1 {
                ${text["2xl"]}
                line-height: ${pxToRem(28)};
            }
            > p {
                margin-top: -${pxToRem(8)};
                margin-bottom: ${pxToRem(2)};
            }
            .berries-header-retract-button {
                width: ${pxToRem(36)};
            }

            .hidden-description {
                margin-right: ${pxToRem(24)}
            }
        }

        .berry-data {
            padding: ${pxToRem(32)} ${pxToRem(24)} 0 ${pxToRem(24)};
            overflow-y: scroll;
            ${scrollbar.hidden}

            header {
                margin-bottom: unset;
                > h2 {
                    ${text["2xl"]}
                    line-height: ${pxToRem(28)};
                }
                > .styled-anchor {
                    margin-top: -${pxToRem(2)};
                }
            }

            .berry-content {
                display: grid;
                justify-content: center;
                place-items: center;
                grid-template-rows: auto auto;
                align-content: space-around;
                height: 100%;
                margin: ${pxToRem(60)} 0 ${pxToRem(36)} 0;
                gap: ${pxToRem(60)} 0;

                .flavors-graph{
                    margin-right: unset;
                }
                ul {
                    order: 2;
                    gap: ${pxToRem(8)};
                    column-gap: ${pxToRem(32)};
                    padding: ${pxToRem(24)} ${pxToRem(24)} ${pxToRem(18)} ${pxToRem(24)};

                    .info-line {
                        ${text.lg}
                    }
                }
            }

            .item-content {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: center;
                justify-content: space-evenly;
                margin: ${pxToRem(24)} 0 ${pxToRem(36)} 0;
                gap: ${pxToRem(36)};

                .descriptions {
                    width: 100%;
                    gap: ${pxToRem(24)} 0;

                    .short-effect-wrapper {
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 0 ${pxToRem(8)};
                        gap: ${pxToRem(4)} 0;
                    }

                    > p {
                        justify-content: center;
                        margin: unset;
                        padding: 0px ${pxToRem(24)};
                    }
                }
                ul {
                    width: fit-content;
                    padding-left: unset;
                }
            }
        }

        .berries-footer {
            justify-content: space-evenly;
        }
    }

    @media (max-width: ${pxToRem(500)}){
        .flavor-text-in-graph {
            ${text.sm}
            &::before {
                ${text.sm}
            }
        }
        .berries-footer > .buttons-wrapper > .styled-anchor {
            &:nth-child(2){
                font-size: 0;
                gap: 0;
            }
        }
    }
`

export const BerryWindow = styled.main.attrs({
    className: "berry-window"
})`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    max-width: ${pxToRem(1162)};
    max-height: ${pxToRem(812)};
    background-color: ${color.ebonyAlpha90};

    outline: ${pxToRem(4)} solid ${color.ashGrayAlpha75};
    border-radius: ${pxToRem(20)};
    overflow: hidden;
`

export const BerryData = styled.div.attrs({
    className: "berry-data"
})<{$showLoading: boolean}>`
${({$showLoading}) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    min-height: ${pxToRem(315)};
    padding: ${pxToRem(38)} ${pxToRem(48)} ${pxToRem(13)} ${pxToRem(48)};
    margin-bottom: ${pxToRem(60)};

    .spinner {
        position: absolute;
        right: ${pxToRem(24)};
        margin-top: -${pxToRem(16)};
        opacity: 0;
        transition: ${transitionTime.medium} linear;

        ${$showLoading && css`
            opacity: 1;
        `}
    }
`}`

export const TitleWrapper = styled.header`
    display: flex;
    width: 100%;
    min-height: ${pxToRem(28)};
    margin-bottom: ${pxToRem(36)};
    flex-wrap: wrap;
    gap: ${pxToRem(12)};
    ${text.xl}

    ${berryAnimationClasses}

    .styled-anchor {
        top: 0px;
        height: fit-content;
        width: fit-content;

        transition-property: color, background-color, opacity;
        transition-timing-function: linear, linear, linear;
        transition-duration: 120ms, 120ms, 120ms;

        &:hover {
            .arrow-return-ico > path {
                fill: white;
            }
        }
    }

    .arrow-return-ico {
        height: ${pxToRem(13)};
        width: fit-content;
        path {
            transition: ${transitionTime.fast} linear;
            fill: ${color.platinum};
        }
    }
`
