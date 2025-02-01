import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import styled from "styled-components"

export const Component = styled.div`
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

    .styled-anchor {
        &:first-child > svg{
            transform: rotate(180deg);
        }
        &:nth-child(2) {
            padding-top: ${numbPxToRem(5)};
            padding-bottom: ${numbPxToRem(5)};
            > svg {
                filter: contrast(0.95);
            }
        }
    }
`
