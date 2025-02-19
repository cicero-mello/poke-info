import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"

export const Component = styled.div
<{ $alwaysShowStatsValue?: boolean }>`
${({ $alwaysShowStatsValue }) => css`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    > span:nth-child(1){
        top: -${pxToRem(28)};
        left: 50%;
        right: 50%;
        justify-self: center;
        &::before {
            top: -${pxToRem(11)};
            background-color: ${color.spicy};
        }
    }
    > span:nth-child(2){
        left: 100%;
        top: 28%;
        margin-left: ${pxToRem(10)};
        &::before {
            top: -${pxToRem(11)};
            left: -${pxToRem(11)};
            background-color: ${color.dry};
        }
    }
    > span:nth-child(3){
        left: 70%;
        bottom: -${pxToRem(18)};
        &::before {
            top: -${pxToRem(11)};
            left: ${pxToRem(11)};
            background-color: ${color.sweet};
        }
    }
    > span:nth-child(4){
        left: -${pxToRem(5)};
        bottom: -${pxToRem(18)};
        &::before {
            top: -${pxToRem(14)};
            right: ${pxToRem(70)};
            border-radius: 0 ${pxToRem(30)} 0 ${pxToRem(30)};
            background-color: ${color.bitter};
        }
    }
    > span:nth-child(5){
        top: 28%;
        left: -${pxToRem(54)};
        &::before {
            top: -${pxToRem(11)};
            right: ${pxToRem(58)};
            border-radius: 0 ${pxToRem(30)} 0 ${pxToRem(30)};
            background-color: ${color.sour};
        }
    }

    ${$alwaysShowStatsValue && css`
        > span::before {
            width: fit-content;
            transform: scale(1);
            margin-left: unset;
            background-color: unset !important;
            top: ${pxToRem(16)} !important;
            width: 100% !important;
            left: 0 !important;
            right: unset !important;
        }

        > span:nth-child(1){
            top: -${pxToRem(42)};
        }
        > span:nth-child(2){
            top: 21%;
        }
        > span:nth-child(5){
            top: 21%;
            left: -${pxToRem(51)};
        }
    `}
`}`

export const Flavor = styled.span.attrs({
    className: "flavor-text-in-graph"
})<{ $potency: number }>`
${({ $potency }) => css`
    display: flex;
    position: absolute;
    width: fit-content;
    user-select: none;
    ${text.base}
    color: ${color.pearlGray};

    &:hover {
        &::before {
            transform: scale(1);
        }
    }

    &::before {
        content: "${$potency}";
        ${text.base}
        position: absolute;
        margin-left: ${pxToRem(60)};
        width: ${pxToRem(54)};
        display: flex;
        justify-content: center;
        border-radius: ${pxToRem(30)} 0 ${pxToRem(30)} 0;
        transform: scale(0);
        transition: ${transitionTime.medium} ease-in-out;
    }
`}`
