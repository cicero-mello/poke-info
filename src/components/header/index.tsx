import { FunctionComponent, useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import logo from "src/assets/images/logo-header.png"
import { HeaderButton } from "src/components"
import { PATHS } from "src/routes/paths"
import * as S from "./styles"

export const Header: FunctionComponent = () => {

    const history = useHistory()
    const { pathname } = useLocation()
    const [
        buttonsNeedTransition,
        setButtonsNeedTransition
    ] = useState<boolean>(false)

    useEffect(() => {
        if(pathname === PATHS.HOME) {
            setTimeout(() => { setButtonsNeedTransition(false) }, 200)
        }
        else setTimeout(() => { setButtonsNeedTransition(true) }, 200)
    }, [pathname])

    return (
        <S.Component
            visible={pathname !== PATHS.HOME}
            buttonsNeedTransition={buttonsNeedTransition}
        >
            <S.Container>
                <S.Logo 
                    src={logo}
                    onClick={() => { history.push(PATHS.HOME) }}
                />
                <S.NavegationContainer>
                    <HeaderButton 
                        text="Find a Pokemon"
                        activated={pathname === PATHS.FIND_POKEMON}
                        onClick={() => { history.push(PATHS.FIND_POKEMON) }}
                    />
                    <HeaderButton
                        text="Pokedex"
                        activated={pathname === PATHS.POKEDEX}
                        onClick={() => { history.push(PATHS.POKEDEX) }}
                    />
                    <HeaderButton
                        text="Candies"
                        activated={pathname === PATHS.CANDIES}
                        onClick={() => { history.push(PATHS.CANDIES) }}
                    />
                    <HeaderButton
                        text="About"
                        activated={pathname === PATHS.ABOUT}
                        onClick={() => { history.push(PATHS.ABOUT) }}
                    />
                </S.NavegationContainer>
            </S.Container>
        </S.Component>
    )
}
