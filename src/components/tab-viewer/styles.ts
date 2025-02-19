import { pxToRem, styleGuide } from "@style-guide"
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
    gap: ${pxToRem(18)};

    ${styleGuide.text.xl}

    h2 {
        font-weight: normal;
    }
`

export const TabPanel = styled.div.attrs({
    role: "tabpanel"
})`
    display: flex;
    max-height: calc(100% - ${pxToRem(18)} - ${pxToRem(28)});
    height: 100%;
    background-color: ${styleGuide.color.ironGrayAlpha30};
    border-radius: ${pxToRem(18)};
    margin-top: ${pxToRem(18)};
    padding: ${pxToRem(28)} ${pxToRem(12)} ${pxToRem(28)} ${pxToRem(28)};
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    overflow-y: auto;
    ${styleGuide.scrollbar.whiteSmall}
    padding-right: ${pxToRem(28)};
`
