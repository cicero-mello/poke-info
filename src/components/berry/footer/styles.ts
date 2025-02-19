import { color } from "@style-guide/color"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Component = styled.footer.attrs({
    className: "berries-footer"
})`
    display: flex;
    position: absolute;
    bottom: 0;
    height: ${pxToRem(60)};
    max-height: ${pxToRem(90)};
    width: 100%;
    background-color: ${color.berry};
    justify-content: flex-end;
    align-items: center;
    padding: 0 ${pxToRem(24)};
    user-select: none;
    gap: ${pxToRem(24)};

    .search-input {
        margin-bottom: ${pxToRem(2)};
    }
`

export const ButtonsWrapper = styled.div.attrs({
    className: "buttons-wrapper"
})`
    display: flex;
    gap: ${pxToRem(8)};

    .styled-anchor {
        &:nth-child(1) > svg{
            transform: rotate(180deg);
        }
        &:nth-child(2) {
            padding-top: ${pxToRem(5)};
            padding-bottom: ${pxToRem(5)};
            > svg {
                filter: contrast(0.95);
            }
        }
    }
`
