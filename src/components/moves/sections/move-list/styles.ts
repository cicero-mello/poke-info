import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: ${pxToRem(32)};
    > .move:not(:last-of-type) {
        border-bottom: ${pxToRem(2)} solid ${styleGuide.color.whiteAlpha49};
    }
`

export const Title = styled.h3.attrs({
    className: "moves-in"
})`
    ${styleGuide.text.base}

    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: ${styleGuide.color.whiteAlpha14};
    border-radius: ${pxToRem(12)};
    padding: ${pxToRem(12)} ${pxToRem(24)};
`

export const List = styled.ul`
    list-style: none;
    padding-left: ${pxToRem(8)};
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(18)};
`
