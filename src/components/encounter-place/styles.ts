import { transitionTime } from "@style-guide/transition-time"
import { fadeIn } from "@style-guide/keyframes"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"
import { pxToRem } from "@style-guide"

export const Component = styled.section.attrs({
    className: "encounter-place"
})`
    display: flex;
    flex-direction: column;
    padding: ${pxToRem(16)} ${pxToRem(24)} ${pxToRem(16)} ${pxToRem(24)};
    border: ${pxToRem(2)} solid ${color.cloudGray};
    border-radius: ${pxToRem(6)};
    animation: ${fadeIn} ${transitionTime.slow} ease-in-out;
`

export const PlaceName = styled.h3`
    text-align: center;
    color: white;
    margin-bottom: ${pxToRem(12)};
    ${text.xl}
`

export const MethodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${color.mistGray};
    ${text.lg}

    gap: ${pxToRem(14)};
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
            min-width: ${pxToRem(6)};
            min-height: ${pxToRem(6)};
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
    gap: ${pxToRem(8)};
`

export const Condition = styled.li`
    display: flex;
    align-items: center;
    line-height: normal;
    margin-left: ${pxToRem(12)};
    margin-bottom: ${pxToRem(4)};

    &::before {
        content: "";
        min-width: ${pxToRem(6)};
        min-height: ${pxToRem(6)};
        border-radius: 50%;
        background-color: ${color.mistGray};
        margin-right: ${pxToRem(8)};
    }
`
