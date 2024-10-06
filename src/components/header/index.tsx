import { PATHS } from "@types"

export const Header = () => {

    return (
        <nav>
            <a href={PATHS.HOME}> Home </a> |
            <a href={PATHS.POKEDEX}> Pokedex </a> |
            <a href={PATHS.FIND_POKEMON}> Find a Pokemon </a> |
            <a href={PATHS.BERRIES}> Berries </a> |
            <a href={PATHS.ABOUT}> About </a>
        </nav>
    )
}
