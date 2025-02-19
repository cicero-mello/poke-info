import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "move"
})`
    color: ${styleGuide.color.pearlGray};
    padding-bottom: ${pxToRem(32)};
`

export const Title = styled.h4`
    width: fit-content;
    font-size: ${pxToRem(20)};
    color: ${styleGuide.color.pearlGray};
    margin-right: ${pxToRem(8)};
`

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(8)};
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${pxToRem(12)};
    margin-left: ${pxToRem(8)};
    gap:  ${pxToRem(12)};
`

export const Description = styled.p`
    ${styleGuide.text.base}
`

export const AdditionalDescription = styled.p`
    > b {
        opacity: 0.6;
    }
`

export const LearnMethod = styled.div`
    display: flex;
    gap: ${pxToRem(12)};

    .mortarboard-ico{
        min-height: ${pxToRem(24)};
        min-width: ${pxToRem(24)};
    }

    > p {
        margin-top: ${pxToRem(2)};
    }
`

export const InfoTopics = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(2)} 0;

    > div {
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(2)} 0;

        &:first-child {
            width: 50%;
        }
    }

    .info-line {
        & > *:first-child {
            opacity: 0.8;
        }
    }

    @media(max-width: 990px){
        > div {
            &:first-child {
                width: 100%;
            }
        }
    }
`
