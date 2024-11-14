import { numbPxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "tab-viewer"
})`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const TabList = styled.div.attrs({
    role: "tablist"
})`

    display: flex;
    width: 100%;
    justify-content: center;
    gap: ${numbPxToRem(18)};

    ${styleGuide.text.xl}
`

export const TabPanel = styled.div.attrs({
    role: "tabpanel"
})`
    display: flex;
    height: 100%;
    background-color: ${styleGuide.color.ironGrayAlpha30};
    border-radius: ${numbPxToRem(18)};
    margin-top: ${numbPxToRem(18)};
`