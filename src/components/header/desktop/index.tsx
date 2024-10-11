import { ButtonTheme } from "@components/button/types"
import { DesktopNavigationProps } from "./types"
import { Button } from "@components/button"
import { FunctionComponent } from "preact"
import { PATHS } from "@types"
import * as S from "./styles"

export const DesktopNavigation: FunctionComponent<DesktopNavigationProps> = ({
    headerTheme, path
}) => {
    const buttonTheme: ButtonTheme = (
        headerTheme === "dark" ? "lineWhite" : "lineGray"
    )

    const ariaHidden = headerTheme === "hidden"
    const tabIndex = ariaHidden ? -1 : 0

    return (
        <S.Nav>
            <Button
                children="Find a Pokémon"
                theme={buttonTheme}
                navigate={{ path: PATHS.FIND_POKEMON }}
                emphasis={path === PATHS.FIND_POKEMON}
                tabIndex={tabIndex}
                aria-hidden={ariaHidden}
            />
            <Button
                children="Pokédex"
                theme={buttonTheme}
                navigate={{ path: PATHS.POKEDEX }}
                emphasis={path === PATHS.POKEDEX}
                tabIndex={tabIndex}
                aria-hidden={ariaHidden}
            />
            <Button
                children="Berries"
                theme={buttonTheme}
                navigate={{ path: PATHS.BERRIES }}
                emphasis={path === PATHS.BERRIES}
                tabIndex={tabIndex}
                aria-hidden={ariaHidden}
            />
            <Button
                children="About"
                theme={buttonTheme}
                navigate={{ path: PATHS.ABOUT }}
                emphasis={path === PATHS.ABOUT}
                tabIndex={tabIndex}
                aria-hidden={ariaHidden}
            />
        </S.Nav>
    )
}
