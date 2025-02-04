import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import styled from "styled-components"

export const Component = styled.footer`
    display: flex;
    position: absolute;
    bottom: 0;
    height: ${numbPxToRem(60)};
    max-height: ${numbPxToRem(90)};
    width: 100%;
    background-color: ${color.berry};
    justify-content: flex-end;
    align-items: center;
    padding: 0 ${numbPxToRem(24)};
    gap: ${numbPxToRem(8)};
    user-select: none;

    .search-input {
        margin: 0 ${numbPxToRem(24)} ${numbPxToRem(2)} 0;
    }

    .styled-anchor {
        &:nth-child(2) > svg{
            transform: rotate(180deg);
        }
        &:nth-child(3) {
            padding-top: ${numbPxToRem(5)};
            padding-bottom: ${numbPxToRem(5)};
            > svg {
                filter: contrast(0.95);
            }
        }
    }
`
