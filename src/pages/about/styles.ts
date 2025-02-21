import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    background: radial-gradient(#afafaf, gray);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Content = styled.main`
    background-color: ${color.smokyGray};
    padding: ${pxToRem(24)};
    border-radius: ${pxToRem(24)};
    margin: ${pxToRem(24)};
    max-width: ${pxToRem(800)};
`

export const Text = styled.p`
    ${text.lg}
    line-height: 38px;
    color: ${color.pearlGray};

    > b {
        a {
            ${text["2xl"]}
            line-height: 38px;
            opacity: 1;
            display: inline-block;
            transition: transform 200ms ease-in-out;
        }
        &:hover a {
            transform: translateY(-${pxToRem(4)});
        }
    }

    > i {
        transform: skewX(-15deg);
        display: inline-block;
    }

    > a {
        display: inline-block;
        text-decoration: underline;
        text-underline-offset: ${pxToRem(4)};
        border-radius: ${pxToRem(2)};
        transition:
            background-color 160ms linear,
            color 160ms linear
        ;

        &:hover{
            background-color: ${color.pearlGray};
            color: ${color.smokyGray};
        }
    }
`

export const Icons = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: ${pxToRem(16)};
    margin-top: ${pxToRem(12)};

    svg {
        width: ${pxToRem(36)};
        height: ${pxToRem(36)};
    }

    & > *:nth-child(1){
        svg {
            transform: rotateY(0) scale(1);
            transition: 400ms ease-in-out;
            path {
                fill: #868686;
                transition: 400ms ease-in-out;
            }
        }

        &:hover svg, &:focus-visible svg {
            transform: rotateY(1turn) scale(1.2);
            path {
                fill: ${color.pearlGray};
            }
        }
    }

    & > *:nth-child(2){
        svg {
            transform: rotateX(0) scale(1);
            transition: 400ms ease-in-out;
            path {
                fill: #868686;
                transition: 400ms ease-in-out;
            }
        }
        &:hover svg, &:focus-visible svg {
            transform: rotateX(360deg) scale(1.2);
            path {
                fill: #3c9dff;
            }
        }
    }
`
