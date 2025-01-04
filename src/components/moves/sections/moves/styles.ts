import { numbPxToRem } from "@style-guide"
import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 48px;
`

export const Title = styled.h3`
    text-align: center;
`

export const List = styled.ul`
    list-style: none;
    padding-left: ${numbPxToRem(8)};
    display: flex;
    flex-wrap: wrap;
    gap: ${numbPxToRem(18)};
`

export const ListItem = styled.li`

`
