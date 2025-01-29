import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "top-area"
})`
    display: flex;
    position: relative;
    width: 100%;
    height: ${pxToRem("154px")};
    background-color: ${styleGuide.color.onyx};
    z-index: 3;

    .pokemon-image {
        height: ${pxToRem("210px")};
        width: ${pxToRem("210px")};
        margin-top: 6px;
        z-index: 1;
    }

    .styled-anchor {
        position: absolute;
        right: ${pxToRem("16px")};
        top: ${pxToRem("10px")};

        opacity: 0.6;
        transition: ${styleGuide.transitionTime.fast};

        &:hover {
            opacity: 1;
        }
    }
`

export const SparklesContainer = styled.div`
    padding: ${numbPxToRem(12)} 0 0 ${numbPxToRem(16)};
    min-width: ${numbPxToRem(105)};
    .sparkles-ico {
        width: ${numbPxToRem(42)};
        height: ${numbPxToRem(42)};
    }
`

export const PokeNumber = styled.span`
    ${styleGuide.text.lg}
    color: ${styleGuide.color.pearlGray};
    font-weight: 700;
    white-space: nowrap;
    min-width: ${pxToRem("105px")};
    padding: ${pxToRem("12px")} 0 0 ${pxToRem("16px")};
`

export const TagsAndFavorite = styled.div`
    display: flex;
    margin-left: ${pxToRem("28px")};
    flex-direction: column;
    justify-content: space-evenly;

    .checkbox-pokeball {
        width: ${pxToRem("44px")};
        height: ${pxToRem("44px")};
    }
`

export const TypeTags = styled.div`
    display: flex;
    gap: ${pxToRem("20px")};
`
