import { Button } from "@components/button"
import * as S from "./styles"
import { PATHS } from "@types"
import { FunctionComponent } from "preact"
import { DesktopNavigationProps } from "./types"
import { ButtonTheme } from "@components/button/types"

export const DesktopNavigation: FunctionComponent<DesktopNavigationProps> = ({
    headerTheme, path
}) => {
    const buttonTheme: ButtonTheme = (
        headerTheme === "dark" ? "lineWhite" : "lineGray"
    )

    return (
        <S.Nav>
            <Button
                theme={buttonTheme}
                navigate={{ path: PATHS.FIND_POKEMON }}
                emphasis={path === PATHS.FIND_POKEMON}
            >
                Find a Pokémon
            </Button>
            <Button
                theme={buttonTheme}
                navigate={{ path: PATHS.POKEDEX }}
                emphasis={path === PATHS.POKEDEX}
            >
                Pokédex
            </Button>
            <Button
                theme={buttonTheme}
                navigate={{ path: PATHS.BERRIES }}
                emphasis={path === PATHS.BERRIES}
            >
                Berries
            </Button>
            <Button
                theme={buttonTheme}
                navigate={{ path: PATHS.ABOUT }}
                emphasis={path === PATHS.ABOUT}
            >
                About
            </Button>
        </S.Nav>
    )
}
