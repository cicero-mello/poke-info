import { transitionTime } from "@style-guide/transition-time"
import { numbPxToRem, styleGuide } from "@style-guide"
import { berryAnimationClasses } from "./animation"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { scrollbar } from "@style-guide/scrollbar"

export const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;
    max-width: ${styleGuide.dimensions.headerContainerWidth};
    padding: ${numbPxToRem(52)};
    align-self: center;
    color: white;

    @media (max-width: ${numbPxToRem(860)}){
        padding: 0;

        .berry-window {
            border-radius: 0;
            outline: none;
            max-height: unset;
            height: 100%;
        }

        .berries-header {
            padding: ${numbPxToRem(18)} ${numbPxToRem(24)} ${numbPxToRem(24)} ${numbPxToRem(24)};
            > h1 {
                ${text["2xl"]}
                line-height: ${numbPxToRem(28)};
            }
            > p {
                margin-top: -${numbPxToRem(8)};
                margin-bottom: ${numbPxToRem(2)};
            }
            .berries-header-retract-button {
                width: ${numbPxToRem(36)};
            }
        }

        .berry-data {
            padding: ${numbPxToRem(32)} ${numbPxToRem(24)} 0 ${numbPxToRem(24)};
            overflow-y: scroll;
            ${scrollbar.hidden}

            header {
                margin-bottom: unset;
                > h2 {
                    ${text["2xl"]}
                    line-height: ${numbPxToRem(28)};
                }
                > .styled-anchor {
                    margin-top: -${numbPxToRem(2)};
                }
            }

            .berry-content {
                display: grid;
                justify-content: center;
                place-items: center;
                grid-template-rows: auto auto;
                align-content: space-around;
                height: 100%;
                margin: ${numbPxToRem(60)} 0 ${numbPxToRem(36)} 0;
                gap: ${numbPxToRem(60)} 0;

                .flavors-graph{
                    margin-right: unset;
                }
                ul {
                    order: 2;
                    gap: ${numbPxToRem(8)};
                    column-gap: ${numbPxToRem(32)};
                    padding: ${numbPxToRem(24)} ${numbPxToRem(12)} ${numbPxToRem(18)} ${numbPxToRem(12)};
                    overflow-y: visible;

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
                margin: ${numbPxToRem(24)} 0 ${numbPxToRem(36)} 0;
                gap: ${numbPxToRem(36)};

                .descriptions {
                    width: 100%;
                    gap: ${numbPxToRem(24)} 0;

                    .short-effect-wrapper {
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 0 ${numbPxToRem(8)};
                        gap: ${numbPxToRem(4)} 0;
                    }

                    > p {
                        justify-content: center;
                        margin: unset;
                        padding: 0px ${numbPxToRem(24)};
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

    @media (max-width: ${numbPxToRem(500)}){
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
    max-width: ${numbPxToRem(1162)};
    max-height: ${numbPxToRem(812)};
    background-color: ${color.ebonyAlpha90};

    outline: ${numbPxToRem(4)} solid ${color.ashGrayAlpha75};
    border-radius: ${numbPxToRem(20)};
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
    min-height: ${numbPxToRem(315)};
    padding: ${numbPxToRem(38)} ${numbPxToRem(48)} ${numbPxToRem(13)} ${numbPxToRem(48)};
    margin-bottom: ${numbPxToRem(60)};

    .spinner {
        position: absolute;
        right: ${numbPxToRem(24)};
        margin-top: -${numbPxToRem(16)};
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
    min-height: ${numbPxToRem(28)};
    margin-bottom: ${numbPxToRem(36)};
    flex-wrap: wrap;
    gap: ${numbPxToRem(12)};
    ${text.xl}

    ${berryAnimationClasses}

    .styled-anchor {
        top: 0px;
        height: fit-content;
        width: fit-content;

        transition: 120ms linear;

        &:hover {
            .arrow-return-ico > path {
                fill: white;
            }
        }
    }

    .arrow-return-ico {
        height: ${numbPxToRem(13)};
        width: fit-content;
        path {
            transition: ${transitionTime.fast} linear;
            fill: ${color.platinum};
        }
    }
`
