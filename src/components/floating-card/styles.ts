import { scrollbar } from "@style-guide/scrollbar"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"
import { pxToRem } from "@style-guide"

export const Component = styled.div.attrs({
    className: "floating-card"
})`
    display: flex;
    justify-content: center;
    position: relative;
    max-width: ${pxToRem(340)};
    max-height: ${pxToRem(340)};
    width: 100%;
    height: 100%;
    background-color: ${color.onyxAlpha83};
    border-radius: ${pxToRem(10)};
    padding-right: ${pxToRem(8)};

    &::before, &::after {
        content: "";
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: ${pxToRem(28)};
        z-index: 1;
        left: 0;
        top: 0;
        border-radius: ${pxToRem(10)} ${pxToRem(10)} 0 0;
        background: linear-gradient(
            ${color.onyx} ${pxToRem(1)},
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
    padding: ${pxToRem(24)} ${pxToRem(13)} ${pxToRem(24)} ${pxToRem(24)};
    height: 100%;
    width: 100%;
`

export const Title = styled.h2.attrs({
    className: "floating-card-title"
})`
    ${text.xl}
    line-height: ${pxToRem(28)};

    position: absolute;
    top: -${pxToRem(28)};
    margin-left: ${pxToRem(8)};
    justify-self: center;
    min-width: 54%;
    background-color: red;
    text-align: center;
    background-color: ${color.snowGray};
    color: ${color.slateGray};
    border-radius: ${pxToRem(10)} ${pxToRem(10)} 0 0;
    padding: 0 ${pxToRem(24)};
    padding-top: ${pxToRem(1)};
`
