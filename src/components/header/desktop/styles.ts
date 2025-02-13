import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    gap: ${pxToRem("24px")};
    margin-bottom: ${pxToRem("2px")};

    > * {
        white-space: nowrap;
    }
`
