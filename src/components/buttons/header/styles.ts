import styled, { css } from "styled-components"
import { HeaderButtonProps } from "./interfaces"

const componentActivated = css `
    transition: none;
    color: #4274F3;
    ::before { display: none;}
`

const componentNotActivated = css`
    transition: 0.15s ease-in;
    color: #7A7A7A;
    :hover {
        color: transparent;
        ::before { width: 100%; }
    }
`

export const Component = styled.button.attrs({
    className: "header-button"
})<HeaderButtonProps>`

    display: flex;
    border: none;
    position: relative;
    white-space: nowrap;
    word-break: keep-all;
    flex-direction: column;
    background-color: transparent;
    font-size: 24px;

    ::before {
        content: ${({ text }) => text && `'${text}'`};
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        word-break: keep-all;
        width: 0%;
        transition: 0.25s;
        color: #4274F3;
    }

    ${({ activated }) => activated ?
        componentActivated : componentNotActivated
    }
`

export const Underline = styled.div.attrs({
    className: "header-button-underline"
})<HeaderButtonProps>`

    height: 1px;
    margin-top: 9px;
    transition: 0.25s;
    background-color: #4274F3;

    width: ${({ activated }) => activated ? '100%' : '0%'};
`
