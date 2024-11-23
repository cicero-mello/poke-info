import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
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

    h2 {
        font-weight: normal;
    }
`

export const TabPanel = styled.div.attrs({
    role: "tabpanel"
})`
    display: flex;
    max-height: calc(100% - ${numbPxToRem(18)} - ${numbPxToRem(28)});
    height: 100%;
    background-color: ${styleGuide.color.ironGrayAlpha30};
    border-radius: ${numbPxToRem(18)};
    margin-top: ${numbPxToRem(18)};
    padding: ${pxToRem("28px")} ${pxToRem("12px")} ${pxToRem("28px")} ${pxToRem("28px")};
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    overflow-y: auto;
    ${styleGuide.scrollbar.whiteSmall}
    padding-right: ${pxToRem("28px")};
`
