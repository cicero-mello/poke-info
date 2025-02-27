import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { PokeApi } from "@types"

export const Component = styled.div.attrs({
    className: "stat-bar"
})<{ $bigMode?: boolean }>`
${({ $bigMode }) => css`
    display: flex;
    align-items: center;

    ${styleGuide.text.sm}
    color: ${styleGuide.color.steelGray};
    white-space: nowrap;
    line-height: 0;
    height: ${pxToRem(10)};
    border-radius: ${pxToRem(20)};

    &:has(label){
        height: ${pxToRem(20)};
    }

    &:has(progress:not([value])){
        border-radius: ${pxToRem(20)};
        background-color: ${styleGuide.color.silverGray};
        animation:
            ${styleGuide.keyframes.opacityLoading2}
            1.3s ease-in-out infinite
        ;
    }

    ${$bigMode && css`
        ${styleGuide.text.base}
        flex-direction: column;
        border-radius: unset;
        align-items: unset;
        height: unset;
        color: white;

        &:has(label){
            height: unset;
        }

        progress {
            height: ${pxToRem(12)};
        }
    `}
`}`

const colorPerStatName = new Map<PokeApi.StatName, string>([
    ["hp", styleGuide.color.hp],
    ["attack", styleGuide.color.attack],
    ["defense", styleGuide.color.defense],
    ["special-attack", styleGuide.color.specialAttack],
    ["special-defense", styleGuide.color.specialDefense],
    ["speed", styleGuide.color.speed]
])

export const Progress = styled.progress
<{ $statName?: PokeApi.StatName }>`
${({ $statName }) => css`

    display: flex;
    overflow: hidden;
    width: 100%;
    height: ${pxToRem(10)};
    background-color: white;
    border-radius: ${pxToRem(20)};
    transition: ${styleGuide.transitionTime.slow};

    ${!$statName && css`
        opacity: 0;
    `}

    &::-webkit-progress-bar {
        overflow: hidden;
        background-color: white;
        border-radius: ${pxToRem(20)};
    }

    ${$statName && css`
        &::-webkit-progress-value {
            background-color: ${colorPerStatName.get($statName)};
        }

        &::-moz-progress-bar {
            background-color: ${colorPerStatName.get($statName)};
        }
    `}
`}`

export const LabelWrapper = styled.span
<{ $haveLabel: boolean}>`
${({ $haveLabel }) => css`
    min-width: 0;
    opacity: 0;
    width: 0;

    ${$haveLabel && css`
        min-width: 60%;
        width: 60%;
        opacity: 1;
        filter: blur(0px);
    `}
`}`
