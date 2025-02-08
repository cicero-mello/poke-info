import { dimensions } from "@style-guide/dimensions"
import { numbPxToRem } from "@style-guide"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100svh - ${dimensions.headerHeight});
    max-width: ${dimensions.headerContainerWidth};
    height: 100%;
    width: 100%;
    padding: ${numbPxToRem(52)};
    align-self: center;
    color: white;
`
