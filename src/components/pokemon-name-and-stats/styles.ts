import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

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
})`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    padding: 8px 16px;
    gap: ${pxToRem(`8px`)};
`


export const PokeName = styled.span.attrs({
     className: "poke-name"
})`
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
`
