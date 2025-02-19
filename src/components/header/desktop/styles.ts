import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    gap: ${pxToRem(24)};
    margin-bottom: ${pxToRem(2)};

    > * {
        white-space: nowrap;
    }
`
