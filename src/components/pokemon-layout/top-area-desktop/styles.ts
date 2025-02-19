import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "top-area"
})`
    display: flex;
    position: relative;
    width: 100%;
    height: ${pxToRem(154)};
    background-color: ${styleGuide.color.onyx};
    z-index: 3;

    .pokemon-image {
        height: ${pxToRem(210)};
        width: ${pxToRem(210)};
        margin-top: 6px;
        z-index: 1;
    }

    .styled-anchor {
        position: absolute;
        right: ${pxToRem(16)};
        top: ${pxToRem(10)};

        svg {
            transition: ${styleGuide.transitionTime.fast};
            opacity: 0.6;
        }
        &:hover {
            svg {
                opacity: 1;
            }
        }
    }
`

export const SparklesContainer = styled.div`
    padding: ${pxToRem(12)} 0 0 ${pxToRem(16)};
    min-width: ${pxToRem(105)};
    .sparkles-ico {
        width: ${pxToRem(42)};
        height: ${pxToRem(42)};
    }
`

export const PokeNumber = styled.span.attrs({
    className: "layout-poke-number"
})`
    ${styleGuide.text.lg}
    color: ${styleGuide.color.pearlGray};
    font-weight: 700;
    white-space: nowrap;
    min-width: ${pxToRem(105)};
    padding: ${pxToRem(12)} 0 0 ${pxToRem(16)};
`

export const TagsAndFavorite = styled.div`
    display: flex;
    margin-left: ${pxToRem(28)};
    flex-direction: column;
    justify-content: space-evenly;

    .favorite-checkbox {
        input {
            border-radius: 50%;
            top: 0;
        }
    }

    .checkbox-pokeball {
        width: ${pxToRem(44)};
        height: ${pxToRem(44)};
    }
`

export const TypeTags = styled.div`
    display: flex;
    gap: ${pxToRem(20)};
`
