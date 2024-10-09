import { useLayoutEffect, useState } from "preact/hooks"
import { DesktopNavigation } from "./desktop"
import { useLocation } from "preact-iso"
import { HeaderTheme } from "./types"
import { Button } from "@components"
import { PATHS } from "@types"
import * as S from "./styles"

import pokeInfoLogo from "@assets/poke-info-logo.svg"
import pokeInfoDarkLogo from "@assets/poke-info-dark-logo.svg"

export const Header = () => {
    const [theme, setTheme] = useState<HeaderTheme>("hidden")
    const { path } = useLocation()

    const logo = (
        theme === "dark" ? pokeInfoDarkLogo : pokeInfoLogo
    )

    useLayoutEffect(() => {
        if(path === PATHS.HOME) setTheme("hidden")
        else if(path === PATHS.ABOUT) setTheme("dark")
        else setTheme("white")
    }, [path])

    return (
        <S.Component $theme={theme}>
            <S.HeaderContainer>
                <Button navigate={{ path: PATHS.HOME }}>
                    <S.Logo src={logo} />
                </Button>
                <DesktopNavigation
                    headerTheme={theme}
                    path={path}
                />
            </S.HeaderContainer>
        </S.Component>
    )
}
