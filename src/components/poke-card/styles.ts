import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { StyledCardProps } from "./types"

export const Card = styled.div<StyledCardProps>`
${({ $pokemonType = "normal", $cardMode = "Simple" }) => css`
    display: flex;
    position: relative;
    flex-direction: column;

    height: ${pxToRem("256px")};
    width: ${pxToRem("160px")};
    border-radius: ${pxToRem("5px")};
    background-color: ${styleGuide.color.onyx};
    box-shadow:
        ${pxToRem("7px")}
        ${pxToRem("7px")}
        ${pxToRem("7px")}
        #00000033
    ;

    user-select: none;
    cursor: pointer;

    transition-property: transform, width, height;
    transition-duration: ${styleGuide.transitionTime.medium};
    transition-timing-function: ease-in-out;

    .card-content {
        transition-property: border-color, background-color;
        transition-duration: ${styleGuide.transitionTime.medium};
        transition-timing-function: ease-in-out;
        border-color: ${styleGuide.getCardColors($pokemonType).borderStrong};

        &::before {
            transition-duration: ${styleGuide.transitionTime.medium};
            border-color: ${styleGuide.getCardColors($pokemonType).borderStrong};
        }
    }



    &:hover {
        transform: scale(1.1);
        .poke-name {
            color: white;
        }
        .card-content{
            background-color: ${styleGuide.getCardColors($pokemonType).background};
            border-color: ${styleGuide.getCardColors($pokemonType).border};
            &::before{
                border-color: ${styleGuide.getCardColors($pokemonType).border};
            }
        }
    }

    ${$cardMode === "Detailed" && css`
        height: ${pxToRem("356px")};
        width: ${pxToRem("210px")};

        .card-content {
            padding-top: 23%;
        }

        .stats-container {
            margin-top: 2%;
        }

        .stat-bar {
            transition-property: color;
            transition-duration: ${styleGuide.transitionTime.medium};
            transition-timing-function: ease-in-out;
        }

        &:hover{
            .stat-bar {
                color: white;
            }
        }
    `}
`}`

export const TopArea = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 30%;
    justify-content: space-between;
    padding: ${pxToRem("5px")};

    .favorite-checkbox {
        height: fit-content;
        height: ${pxToRem("24px")};
        width: ${pxToRem("24px")};
        transition: ${styleGuide.transitionTime.medium};

        &:hover, &:has(:focus) {
            transform: scale(2.5) rotate(25deg);
        }
    }
`

export const PokeNumber = styled.span`
    ${styleGuide.text.xs}
    color: ${styleGuide.color.ashGray};
`

export const Image = styled.img`
    display: flex;
    position: absolute;
    height: 100%;
    left: 25%;
    z-index: 1;
`

export const CardContentContainer = styled.div`
    display: flex;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 22%;
    pointer-events: none;
`

export const CardContent = styled.div.attrs({
    className: "card-content"
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 78%;
    padding-top: 21%;
    background-color: ${styleGuide.color.mistGray};
    border-radius: ${pxToRem("5px")};
    border-top:
        ${pxToRem("4px")} solid
        ${styleGuide.color.grassCardBorderStrong}
    ;

    &::before {
        content: '';
        position: absolute;
        transform: translateX(-50%);
        top: -10%;
        left: 50%;
        width: 53%;
        height: 24.5%;

        background: ${styleGuide.color.onyx};
        border-radius: 0px 0px 100px 100px;
        border:
            ${pxToRem("4px")} solid
            ${styleGuide.color.grassCardBorderStrong}
        ;
        border-top: none;
    }
`

export const PokeName = styled.span.attrs({
    className: "poke-name"
})`
    ${styleGuide.text.lg}
    color: ${styleGuide.color.steelGray};

    transition-property: color;
    transition-duration: ${styleGuide.transitionTime.medium};
    transition-timing-function: ease-out;
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
