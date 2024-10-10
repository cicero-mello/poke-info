import { useLayoutEffect, useRef, useState } from "preact/hooks"
import { useOutsideClick, useOutsideFocus } from "@hooks"
import { MobileNavigationProps } from "./types"
import { FunctionComponent } from "preact"
import { Button } from "@components"
import { PATHS } from "@types"
import * as S from "./styles"

export const MobileNavigation: FunctionComponent<MobileNavigationProps> = ({
    headerTheme, path
}) => {
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

    return (
        <S.Component ref={navigationRef}>
            <S.MenuButton
                $isMenuOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(state => !state)}
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
                    theme="boldWhite"
                    navigate={{ path: PATHS.FIND_POKEMON }}
                    emphasis={path === PATHS.FIND_POKEMON}
                >
                    Find a Pokémon
                </Button>
                <Button
                    theme="boldWhite"
                    navigate={{ path: PATHS.POKEDEX }}
                    emphasis={path === PATHS.POKEDEX}
                >
                    Pokédex
                </Button>
                <Button
                    theme="boldWhite"
                    navigate={{ path: PATHS.BERRIES }}
                    emphasis={path === PATHS.BERRIES}
                >
                    Berries
                </Button>
                <Button
                    theme="boldWhite"
                    navigate={{ path: PATHS.ABOUT }}
                    emphasis={path === PATHS.ABOUT}
                >
                    About
                </Button>
            </S.Nav>
        </S.Component>
    )
}
