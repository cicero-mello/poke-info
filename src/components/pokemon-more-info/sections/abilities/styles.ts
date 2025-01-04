import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap:  ${pxToRem("12px")};
`

export const Title = styled.h3`
    margin-bottom: ${pxToRem("2px")};
`

export const Text = styled.p`
    padding-left: ${pxToRem("8px")};
`

export const Line = styled.div`
    display: flex;
    background-color: ${styleGuide.color.whiteAlpha49};
    min-height: 2px;
    width: 100%;
    border-radius: 10px;
    margin: 12px 0;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${numbPxToRem(18)};
    padding-left: ${pxToRem("8px")};
`

export const ListItem = styled.li`
    display: flex;
`
