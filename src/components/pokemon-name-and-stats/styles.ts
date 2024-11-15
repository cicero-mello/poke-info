import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const Component = styled.div.attrs({
    className: "pokemon-name-and-stats"
})`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const StatsContainer = styled.div.attrs({
    className: "stats-container"
})<{ $bigMode?: boolean }>`
${({ $bigMode }) => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    padding: 8px 16px;
    gap: ${pxToRem("8px")};

    overflow-y: auto;

    ${styleGuide.scrollbar.whiteSmall}

    &::-webkit-scrollbar-thumb {
        min-height: ${pxToRem("12px")};
    }

    ${$bigMode && css`
        gap: ${pxToRem("14px")};

        progress {
            background-color: ${styleGuide.color.pearlGray};
            &::-webkit-progress-bar {
                background-color: ${styleGuide.color.pearlGray};
            }
        }
    ` }
`}`

export const PokeName = styled.span.attrs({
     className: "poke-name"
})<{ $bigMode?: boolean }>`
${({ $bigMode }) => css`
    ${styleGuide.text.lg}
    color: ${styleGuide.color.steelGray};

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: center;

    transition-property: color;
    transition-duration: ${styleGuide.transitionTime.slow};

    &:empty {
        background-color: ${styleGuide.color.silverGray};
        color: transparent;
        width: 54%;
        height: ${pxToRem(`16px`)};
        margin: ${pxToRem(`6px`)} 0;
        border-radius: ${pxToRem("4px")};
        animation:
            ${styleGuide.keyframes.opacityLoading2}
            1.3s ease-in-out infinite
        ;
    }

    ${$bigMode && css`
        ${styleGuide.text["2xl"]}
        color: white;
        font-weight: bold;
        min-height: ${pxToRem("32px")};
    `}
`}`
