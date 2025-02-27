import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const Component = styled.div
<{ $nameLeftWidth: string, $nameRightWidth: string }>`
${({ $nameLeftWidth, $nameRightWidth }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    position: relative;
    gap: ${pxToRem(6)};

    &:has(input:not(:checked)) .slider{
        margin-left: 0;
        width: calc(
            ${$nameLeftWidth}
            + ${pxToRem(28)}
        );
    }

    &:has(input:checked) .slider {
        margin-left: calc(
            ${$nameLeftWidth}
            + ${pxToRem(28)}
        );
        width: calc(
            ${$nameRightWidth}
            + ${pxToRem(28)}
        );
    }
`}`

export const Label = styled.label`
    ${styleGuide.text.base}
    user-select: none;
`

export const SliderContainer = styled.div`
    cursor: pointer;
    display: flex;
    position: relative;
    gap: ${pxToRem(28)};

    background-color: white;
    padding: ${pxToRem(2)} ${pxToRem(14)};
    border-radius: ${pxToRem(56)};
    overflow: hidden;
`

export const SliderValue = styled.span`
    ${styleGuide.text.base}

    height: 100%;
    user-select: none;
    color: ${styleGuide.color.smokyGray};
    z-index: 1;
`

export const Slider = styled.span.attrs({
    className: "slider"
})<{ $withTransition: boolean }>`
${({ $withTransition }) => css`
    display: flex;
    height: 100%;
    top: 0;
    left: 0;

    ${$withTransition && css`
        transition:
            ${styleGuide.transitionTime.medium}
            ease-in-out
        ;
    `}

    position: absolute;
    border-radius: ${pxToRem(56)};
    background: linear-gradient(
        to bottom,
        ${styleGuide.color.pastelBlueAlpha30},
        ${styleGuide.color.pastelBlue}
    );
`}`

export const Input = styled.input`
    appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
`
