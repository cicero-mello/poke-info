import { pageAnimationClasses } from "../../animations"
import { numbPxToRem } from "@style-guide"
import styled from "styled-components"

export const Component = styled.section.attrs({
    id: "places-section"
})`
    display: flex;
    flex-direction: column;
    max-width: ${numbPxToRem(680)};
    margin-top: ${numbPxToRem(24)};
    gap: ${numbPxToRem(24)};

    opacity: 0;
    ${pageAnimationClasses}
`
