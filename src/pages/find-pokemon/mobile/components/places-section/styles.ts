import { pageAnimationClasses } from "../../animations"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Component = styled.section.attrs({
    id: "places-section"
})`
    display: flex;
    flex-direction: column;
    max-width: ${pxToRem(680)};
    margin-top: ${pxToRem(24)};
    gap: ${pxToRem(24)};

    opacity: 0;
    ${pageAnimationClasses}
`
