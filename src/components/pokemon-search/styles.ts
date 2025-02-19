import { FocusOrigin } from "@hooks/use-focus-origin/types"
import styled, { css, keyframes } from "styled-components"
import { pxToRem, styleGuide } from "@style-guide"
import { focusOutline } from "@style-guide/focus"

export const Form = styled.form.attrs({
    className: "pokemon-search-input"
})<{$focusOrigin: FocusOrigin}>`
${({ $focusOrigin }) => css`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(8)};

    input {
        outline: none;
        ${$focusOrigin === "tab" && css`
            &:focus {
                ${focusOutline}
            }
        `}
    }
`}`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: fit-content;

    ${styleGuide.text.base}
`

export const InputWrapper = styled.span`
    display: flex;
    position: relative;

    max-width: ${pxToRem(320)};
    width: 100%;
`

export const Input = styled.input`
    ${styleGuide.text.base}
    color: ${styleGuide.color.graphite};
    caret-color: ${styleGuide.color.graphite};
    background-color: ${styleGuide.color.silverGray};
    padding: ${pxToRem(4)} ${pxToRem(8)};
    border-radius: ${pxToRem(4)} 0 0 ${pxToRem(4)};
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

    padding: 0 ${pxToRem(6)};
    border-radius: 0 ${pxToRem(4)} ${pxToRem(4)} 0;

    svg {
        height: ${pxToRem(25)};
        width: ${pxToRem(26)};
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

const hidingPopUp = keyframes`
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
    bottom: -${pxToRem(36)};
    padding: ${pxToRem(4)} ${pxToRem(16)};
    border-radius: 100px;
    z-index: 1;
    pointer-events: none;
    white-space: nowrap;

    animation:
        ${showingPopUp}
        ${styleGuide.transitionTime.slow}
        ease-in-out forwards
        ,
        ${hidingPopUp}
        ${styleGuide.transitionTime.slow}
        2.4s linear forwards
    ;

    &::before {
        content: "Not found : (";
    }
`
