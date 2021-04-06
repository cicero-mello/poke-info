import styled, { css } from "styled-components"

interface PageProps {
    closeScreen: boolean
    openScreen: boolean
}

export const Page = styled.div.attrs({
    className: "home-page"
})<PageProps>`
    display: flex;
    align-self: center;
    justify-content: space-between;
    width: 100%;
    opacity: 0%;
    max-width: 1700px;
    min-height: 100vh;
    transition: 0.3s ease-in;

    ${({openScreen}) => openScreen && css`
        opacity: 100%;
    `}

    ${({closeScreen}) => closeScreen && css`
        opacity: 0%;
    `}

    @media (max-height: 500px) and (max-width: 880px) {
        flex-direction: column;
        justify-content: space-evenly;
    }

    @media (max-width: 1180px) and (min-height: 400px){
        flex-direction: column;
        justify-content: space-evenly;
    }

`

export const Image = styled.img.attrs({
    alt: "Pokémon Info Website Logo",
    className: "logo-image"
})`
    display: flex;
    align-self: center;
    width: 100%;
    max-width: 690px;
    transition: 0.15s;
    padding: 0px 20px;
    padding-bottom: 18%;
    
    @media (max-height: 555px) {
        padding-bottom: 5%;
    }

    @media (max-height: 435px) {
        max-width: 500px;
        padding-bottom: 1.5%;
    }

    @media (max-width: 1180px) {
        padding-bottom: 1.5%;
    }

    @media (max-height: 520px) and (max-width: 1180px){
        max-width: 300px
    }

    @media (max-height: 340px) and (max-width: 1180px){
        max-width: 200px
    }
`

export const ButtonContainer = styled.div.attrs({
    className: "home-button-container"
})`
    display: flex;
    align-self: center;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-top: 10%;
    padding-right: 42px;

    > button {
        margin-bottom: 44px;
        transition: 0.2s ease-in-out;
        :hover { padding-right: 70px; }
    }

    @media (max-height: 555px) {
        padding-top: 5%;
    }

    @media (max-height: 653px){
        padding-top: 0%;
        max-width: 500px;

        > button {
            font-size: 18px;
            margin-top: 10px;
            padding: 13px 18px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 1180px) and (min-height: 400px) {
        padding: 0%;
        align-items: center;

        > button {
            :hover {
                padding-left: 35px;
                padding-right: 35px;
            }
        }
    }

    @media (max-height:500px) and (max-width: 880px) {
        padding: 0%;
        align-items: center;

        > button {
            :hover {
                padding-left: 25px;
                padding-right: 25px;
            }
        }
    }

    @media (max-width: 420px) {
        > button {
            font-size: 18px;
            margin-top: 10px;
            padding: 13px 18px;
            margin-bottom: 10px;

            :hover {
                padding-left: 18px;
                padding-right: 18px;
            }
        }
    }

    @media (max-width: 350px) {
        > button { margin: 10px; }
    }

    @media (max-height: 340px) and (max-width: 1180px){
        > button { 
            margin-top: 9px;
            font-size: 12px;
            padding: 5px 8px;
            border-radius: 5px;

            :hover {
                padding-left: 8px;
                padding-right: 8px;
            }
        }
    }
`
