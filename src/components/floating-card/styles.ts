import { scrollbar } from "@style-guide/scrollbar"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "floating-card"
})`
    display: flex;
    justify-content: center;
    position: relative;
    max-width: ${numbPxToRem(340)};
    max-height: ${numbPxToRem(340)};
    width: 100%;
    height: 100%;
    background-color: ${color.onyxAlpha83};
    border-radius: ${numbPxToRem(10)};
    padding-right: ${numbPxToRem(8)};

    &::before, &::after {
        content: "";
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: ${numbPxToRem(28)};
        z-index: 1;
        left: 0;
        top: 0;
        border-radius: ${numbPxToRem(10)} ${numbPxToRem(10)} 0 0;
        background: linear-gradient(
            ${color.onyx} ${numbPxToRem(1)},
            transparent
        );
    }

    &::after {
        top: unset;
        bottom: 0;
        transform: rotate(180deg)
    }
`

export const Content = styled.div.attrs({
    className: "floating-card-content"
})`
    ${scrollbar.tinyGray}

    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    padding: ${numbPxToRem(24)} ${numbPxToRem(13)} ${numbPxToRem(24)} ${numbPxToRem(24)};
    height: 100%;
    width: 100%;
`

export const Title = styled.h2.attrs({
    className: "floating-card-title"
})`
    ${text.xl}
    line-height: ${numbPxToRem(28)};

    position: absolute;
    top: -${numbPxToRem(28)};
    margin-left: ${numbPxToRem(8)};
    justify-self: center;
    min-width: 54%;
    background-color: red;
    text-align: center;
    background-color: ${color.snowGray};
    color: ${color.slateGray};
    border-radius: ${numbPxToRem(10)} ${numbPxToRem(10)} 0 0;
    padding: 0 ${numbPxToRem(24)};
    padding-top: ${numbPxToRem(1)};
`
