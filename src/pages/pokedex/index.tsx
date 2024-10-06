import { PATHS } from "@types"
import { FC } from "react"

export const Pokedex: FC = () => {

    return (
        <>
            <h1> Pokedex </h1>
            <a href={PATHS.POKEDEX + "/bulbasaur"}> bulbasaur </a>
        </>
    )
}
