import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"

export const Component = styled.section.attrs({
    className: "encounter-place"
})`
    display: flex;
    flex-direction: column;
    padding: ${numbPxToRem(16)} ${numbPxToRem(24)} ${numbPxToRem(16)} ${numbPxToRem(24)};
    border: ${numbPxToRem(2)} solid ${color.cloudGray};
    border-radius: ${numbPxToRem(6)};
`

export const PlaceName = styled.h3`
    text-align: center;
    color: white;
    margin-bottom: ${numbPxToRem(12)};
    ${text.xl}
`

export const MethodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${color.mistGray};
    ${text.lg}

    gap: ${numbPxToRem(14)};
`

export const MethodName = styled.p`
    font-style: italic;
`

export const Numbers = styled.ul`
    .info-line {
        ${text.lg}
        flex-wrap: nowrap;

        &::before {
            content: "";
            min-width: ${numbPxToRem(6)};
            min-height: ${numbPxToRem(6)};
            border-radius: 50%;
            background-color: ${color.mistGray};
        }
    }

    .info-line-title {
        font-weight: normal;
        white-space: nowrap;
    }

    .info-line-data {
        font-weight: bold;
        white-space: nowrap;
    }
`

export const ConditionTitle = styled.p``

export const ConditionWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: ${numbPxToRem(8)};
`

export const Condition = styled.li`
    display: flex;
    align-items: center;
    line-height: normal;
    margin-left: ${numbPxToRem(12)};
    margin-bottom: ${numbPxToRem(4)};

    &::before {
        content: "";
        min-width: ${numbPxToRem(6)};
        min-height: ${numbPxToRem(6)};
        border-radius: 50%;
        background-color: ${color.mistGray};
        margin-right: ${numbPxToRem(8)};
    }
`
