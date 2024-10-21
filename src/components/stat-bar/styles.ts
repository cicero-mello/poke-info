import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { PokeApi } from "@types"

export const Component = styled.div.attrs({
    className: "stat-bar"
})`
    display: flex;
    align-items: center;

    ${styleGuide.text.sm}
    color: ${styleGuide.color.steelGray};
    white-space: nowrap;
    line-height: 0;
    height: ${pxToRem("10px")};

    transition-property: height;
    transition-duration: ${styleGuide.transitionTime.slow};
    transition-timing-function: ease-in-out;

    &:has(label){
        height: ${pxToRem("20px")};
    }
`

const colorPerStatName = new Map<PokeApi.StatName, string>([
    ["hp", styleGuide.color.hp],
    ["attack", styleGuide.color.attack],
    ["defense", styleGuide.color.defense],
    ["special-attack", styleGuide.color.specialAttack],
    ["special-defense", styleGuide.color.specialDefense],
    ["speed", styleGuide.color.speed]
])

export const Progress = styled.progress
<{ $statName: PokeApi.StatName }>`
${({ $statName }) => css`

    display: flex;
    overflow: hidden;
    width: 100%;
    height: ${pxToRem("10px")};
    background-color: white;
    border-radius: ${pxToRem("20px")};
    transition: ${styleGuide.transitionTime.medium};

    &::-webkit-progress-bar {
        overflow: hidden;
        background-color: white;
        border-radius: ${pxToRem("20px")};
    }

    &::-webkit-progress-value {
        background-color: ${colorPerStatName.get($statName)};
    }

    &::-moz-progress-bar {
        background-color: ${colorPerStatName.get($statName)};
    }
`}`

export const LabelWrapper = styled.span
<{ $haveLabel: boolean}>`
${({ $haveLabel }) => css`

    transition-property: opacity, filter, width, min-width;
    transition-duration:
        ${styleGuide.transitionTime.slow},
        ${styleGuide.transitionTime.slow},
        ${styleGuide.transitionTime.medium},
        ${styleGuide.transitionTime.medium}
    ;
    transition-timing-function: ease-in-out;

    min-width: 0;
    opacity: 0;
    width: 0;
    filter: blur(5px);

    ${$haveLabel && css`
        min-width: 60%;
        width: 60%;
        opacity: 1;
        filter: blur(0px);
    `}
`}`
