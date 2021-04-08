import styled, { css } from "styled-components"
import { HomeButtonProps } from "./interfaces"

export const HomeButton = styled.button.attrs({
    className: "home-button"
})<HomeButtonProps>`

    display: flex;
    padding: 20px 25px;
    border-radius: 12px;
    transition: 0.17s ease-in;
    font: 25px "Quantico", sans-serif;

    color: #FFFFFF;
    background-color: #4274F3;
    border: 2px solid rgba(254, 254, 254, 0.7);

    :hover { background-color: #1c57eb; }

    ${({ text }) => text && 
        css`::before{ content: '${text}'; }`
    }
`
