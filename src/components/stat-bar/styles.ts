import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { PokeApi } from "@types"

export const Component = styled.div`
    color: black;
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

export const Label = styled.label`

`
