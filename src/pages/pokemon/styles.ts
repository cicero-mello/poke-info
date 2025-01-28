import { pokeWindowRem } from "@components"
import { styleGuide } from "@style-guide"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 48px;

    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;

    @media(max-height: ${pokeWindowRem.noWhiteLine.maxHeight}){
        padding: 12px 48px;
    }

    @media
        (max-width: ${pokeWindowRem.full.maxWidth}),
        (max-height: ${pokeWindowRem.full.maxHeight})
    {
        padding: 0;
    }
`
