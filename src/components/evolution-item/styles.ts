import { numbPxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "evolution-item"
})`
    display: flex;
    width: 100%;

    .info-line > span:first-child {
        padding-left: ${numbPxToRem(8)};
        opacity: 0.6;
    }

    @media (max-width: ${numbPxToRem(960)}){
        flex-direction: column;

        .pokemon-pixel-art {
            align-self: center;
        }

        .pokemon-name, .text:first-of-type {
            text-align: center;
        }

        .infos {
            padding-left: 0;
            padding-top: ${numbPxToRem(16)};
        }

        .how-to-get {
            margin-top: ${numbPxToRem(16)};
        }
    }
`

export const Infos = styled.div.attrs({
    className: "infos"
})`
    display: flex;
    flex-direction: column;
    padding-left: ${numbPxToRem(18)};
    gap: ${numbPxToRem(4)};
`

export const PokemonName = styled.h3.attrs({
    className: "pokemon-name"
})``

export const Text = styled.p.attrs({
    className: "text"
})`
    padding-left: ${numbPxToRem(8)};
`

export const HowToGet = styled.h4.attrs({
    className: "how-to-get"
})`
    margin-top: ${numbPxToRem(18)};
    > span {
        opacity: 0.8;
        font-weight: normal;
        margin-left: ${numbPxToRem(2)};

        ${styleGuide.text.sm};
    }
`
