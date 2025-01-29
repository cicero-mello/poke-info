import { numbPxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: ${numbPxToRem(32)};
    > .move:not(:last-of-type) {
        border-bottom: ${numbPxToRem(2)} solid ${styleGuide.color.whiteAlpha49};
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
    border-radius: ${numbPxToRem(12)};
    padding: ${numbPxToRem(12)} ${numbPxToRem(24)};
`

export const List = styled.ul`
    list-style: none;
    padding-left: ${numbPxToRem(8)};
    display: flex;
    flex-wrap: wrap;
    gap: ${numbPxToRem(18)};
`
