import styled, { css } from "styled-components"

interface ComponentProps {
    visible: boolean
    buttonsNeedTransition: boolean
}

const removingButtonTransition = css`
    & nav > button {
        transition: none !important;
        ::before { transition: none !important; }
        .header-button-underline { transition: none !important; }
    }
`

export const Component = styled.div.attrs({
    className: "header"
})<ComponentProps>`
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.94);
    transition: 0.17s ease-out;

    ${({ visible }) => visible ? css`opacity: 100%;` :
        css`
            opacity: 0%;
            pointer-events: none;
        `
    }

    ${({ buttonsNeedTransition }) => 
        !buttonsNeedTransition && removingButtonTransition
    }
`

export const Container = styled.div.attrs({
    className: "header-container"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1250px;
    margin: 0px 90px;
`

export const Logo = styled.img.attrs({
    className: "logo-header",
    alt: "Pokémon - Info Website Logo"
})`
    max-height: 50px;
    cursor: pointer;
    filter: contrast(90%);

    :hover {
        filter: contrast(100%);
    }
`

export const NavegationContainer = styled.nav.attrs({
    className: "header-navegation"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-top: 7px;

    > button {
        margin-left: 40px;
    }
`
