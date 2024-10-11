import { Button } from "@components/button"
import { PATHS } from "@types"
import * as S from "./styles"

import logo from "@assets/poke-info-logo.svg"

export const Home = () => (
    <S.Content>
        <S.Logo src={logo} alt="PokéInfo" />
        <S.Navigation>
            <Button
                theme="bigBlue"
                navigate={{ path: PATHS.FIND_POKEMON }}
                children="Where can I find a Pokémon?"
            />
            <Button
                theme="bigBlue"
                navigate={{ path: PATHS.POKEDEX }}
                children="Pokédex"
            />
            <Button
                theme="bigBlue"
                navigate={{ path: PATHS.BERRIES }}
                children="Berries"
            />
        </S.Navigation>
    </S.Content>
)
