import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { numbPxToRem } from "@style-guide"
import { text } from "@style-guide/text"
import { transitionTime } from "@style-guide/transition-time"

export const Component = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    > span:nth-child(1){
        top: -${numbPxToRem(28)};
        left: 50%;
        right: 50%;
        justify-self: center;
        &::before {
            top: -${numbPxToRem(11)};
            background-color: ${color.spicy};
        }
    }
    > span:nth-child(2){
        left: 100%;
        top: 28%;
        margin-left: ${numbPxToRem(10)};
        &::before {
            top: -${numbPxToRem(11)};
            left: -${numbPxToRem(11)};
            background-color: ${color.dry};
        }
    }
    > span:nth-child(3){
        left: 70%;
        bottom: -${numbPxToRem(18)};
        &::before {
            top: -${numbPxToRem(11)};
            left: ${numbPxToRem(11)};
            background-color: ${color.sweet};
        }
    }
    > span:nth-child(4){
        left: -${numbPxToRem(5)};
        bottom: -${numbPxToRem(18)};
        &::before {
            top: -${numbPxToRem(14)};
            right: ${numbPxToRem(70)};
            border-radius: 0 ${numbPxToRem(30)} 0 ${numbPxToRem(30)};
            background-color: ${color.bitter};
        }
    }
    > span:nth-child(5){
        top: 28%;
        left: -${numbPxToRem(54)};
        &::before {
            top: -${numbPxToRem(11)};
            right: ${numbPxToRem(58)};
            border-radius: 0 ${numbPxToRem(30)} 0 ${numbPxToRem(30)};
            background-color: ${color.sour};
        }
    }

`

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
        margin-left: ${numbPxToRem(60)};
        background-color: red;
        width: ${numbPxToRem(54)};
        display: flex;
        justify-content: center;
        border-radius: ${numbPxToRem(30)} 0 ${numbPxToRem(30)} 0;
        transform: scale(0);
        transition: ${transitionTime.medium} ease-in-out;
    }
`}`
