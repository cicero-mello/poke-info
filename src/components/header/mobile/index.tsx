import { useNavigation, useOutsideClick, useOutsideFocus } from "@hooks"
import { useLayoutEffect, useRef, useState } from "preact/hooks"
import { MobileNavigationProps } from "./types"
import { customSessionStorage } from "@stores"
import { FunctionComponent } from "preact"
import { Button } from "@components"
import { PATHS } from "@types"
import * as S from "./styles"

export const MobileNavigation: FunctionComponent<MobileNavigationProps> = ({
    headerTheme, path
}) => {
    const { navigate } = useNavigation()
    const navigationRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useLayoutEffect(() => {
        if(path === PATHS.HOME) setIsMenuOpen(false)
    }, [path])

    useOutsideClick(navigationRef, () => {
        setIsMenuOpen(false)
    })

    useOutsideFocus(navigationRef, () => {
        setIsMenuOpen(false)
    })

    const linkAriaHidden = headerTheme === "hidden" || !isMenuOpen
    const linkTabIndex = linkAriaHidden ? -1 : 0

    return (
        <S.Component ref={navigationRef}>
            <S.MenuButton
                $isMenuOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(state => !state)}
                aria-hidden={headerTheme === "hidden"}
                tabIndex={headerTheme === "hidden" ? -1 : 0}
            >
                <S.MenuLine $theme={headerTheme} />
                <S.MenuLine $theme={headerTheme} />
                <S.MenuLine $theme={headerTheme} />
            </S.MenuButton>
            <S.Nav
                $isMenuOpen={isMenuOpen}
                $theme={headerTheme}
            >
                <Button
                    children="Find a Pokémon"
                    theme="boldWhite"
                    navigate={{ path: PATHS.FIND_POKEMON }}
                    emphasis={path === PATHS.FIND_POKEMON}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden={linkAriaHidden}
                    tabIndex={linkTabIndex}
                />
                <Button
                    children="Pokédex"
                    theme="boldWhite"
                    preventNavOnClick
                    navigate={{ path: PATHS.POKEDEX }}
                    emphasis={path.includes(PATHS.POKEDEX)}
                    aria-hidden={linkAriaHidden}
                    tabIndex={linkTabIndex}
                    onClick={() => {
                        customSessionStorage.resetPokedexRestorationData()
                        navigate(PATHS.POKEDEX)
                        setIsMenuOpen(false)
                    }}
                />
                <Button
                    children="Berries"
                    theme="boldWhite"
                    navigate={{ path: PATHS.BERRIES + "/1" }}
                    emphasis={path === PATHS.BERRIES + "/1"}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden={linkAriaHidden}
                    tabIndex={linkTabIndex}
                />
                <Button
                    children="About"
                    theme="boldWhite"
                    navigate={{ path: PATHS.ABOUT }}
                    emphasis={path === PATHS.ABOUT}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden={linkAriaHidden}
                    tabIndex={linkTabIndex}
                />
            </S.Nav>
        </S.Component>
    )
}
