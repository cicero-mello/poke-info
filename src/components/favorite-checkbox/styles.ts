import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "favorite-checkbox"
})`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: ${pxToRem("4px")};

    .checkbox-pokeball {
        cursor: pointer;
        user-select: none;
        width: ${pxToRem(`30px`)};
        height: ${pxToRem("30px")};
        filter: drop-shadow(0px 4px 4px #0000005E);

        & > * {
            opacity: 1;
            transition: ${styleGuide.transitionTime.medium};
        }
    }

    &:has(input:not(:checked)){
        .checkbox-pokeball > * {
            opacity: 0.32;
            transition: ${styleGuide.transitionTime.medium} linear;
        }
    }

    &:has(input:checked){
        .cp-top {
            fill: ${styleGuide.color.coralRed};
            transition: ${styleGuide.transitionTime.medium} linear;
        }
    }
`

export const Input = styled.input`
    appearance: none;
    position: absolute;
`

export const Label = styled.label`
    ${styleGuide.text.base}
    user-select: none;
`
