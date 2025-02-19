import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(48)};
    padding: ${pxToRem(8)} 0;

    .spinner {
        top: calc(50% - (${pxToRem(24/2)}));
        left: calc(50% - (${pxToRem(24/2)}));
    }
`
