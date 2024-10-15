import { pxToRem, styleGuide } from "@style-guide"
import styled, { css, keyframes } from "styled-components"

export const Form = styled.form.attrs({
    className: "pokemon-search-input"
})`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem("6px")};
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${styleGuide.text.base}
`

export const InputWrapper = styled.span`
    display: flex;
    position: relative;

    max-width: ${pxToRem("320px")};
    width: 100%;
`

export const Input = styled.input`
    ${styleGuide.text.base}
    color: ${styleGuide.color.graphite};
    caret-color: ${styleGuide.color.graphite};
    background-color: ${styleGuide.color.silverGray};

    padding: ${pxToRem("4px")} ${pxToRem("8px")};
    border-radius: ${pxToRem("4px")} 0 0 ${pxToRem("4px")};
    width: 100%;
`

const pokeballRotate = keyframes`
    from { transform: rotate(-136deg); }
    to { transform: rotate(224deg); }
`

export const Button = styled.button
<{ $isLoading: boolean }>`
${({ $isLoading }) => css`
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${styleGuide.color.graphite};

    padding: 0 ${pxToRem("6px")};
    border-radius: 0 ${pxToRem("4px")} ${pxToRem("4px")} 0;

    svg {
        height: ${pxToRem("25px")};
        width: ${pxToRem("26px")};
        transition: ${styleGuide.transitionTime.slow};
    }

    &:hover {
        svg { transform: rotate(-136deg); }
    }

    ${$isLoading && css`
        svg {
            animation:
                ${pokeballRotate} 300ms linear infinite
            ;
        }
    `}
`}`

const showingPopUp = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`

const hiddingPopUp = keyframes`
    from {
        opacity: 1;
        filter: blur(0);
    }
    to {
        opacity: 0;
        filter: blur(6px);
    }
`

export const NotFoundPopUp = styled.div`
    position: absolute;
    background-color: ${styleGuide.color.fire};
    bottom: -${pxToRem("36px")};
    padding: ${pxToRem("4px")} ${pxToRem("16px")};
    border-radius: 100px;
    z-index: 1;
    pointer-events: none;
    white-space: nowrap;

    animation:
        ${showingPopUp}
        ${styleGuide.transitionTime.slow}
        ease-in-out forwards
        ,
        ${hiddingPopUp}
        ${styleGuide.transitionTime.slow}
        2.4s linear forwards
    ;

    &::before {
        content: "Not found : (";
    }
`
