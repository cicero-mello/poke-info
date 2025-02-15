import { numbPxToRem } from "@style-guide"
import styled from "styled-components"

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${numbPxToRem(48)};
    padding: ${numbPxToRem(8)} 0;

    .spinner {
        top: calc(50% - (${numbPxToRem(24/2)}));
        left: calc(50% - (${numbPxToRem(24/2)}));
    }
`
