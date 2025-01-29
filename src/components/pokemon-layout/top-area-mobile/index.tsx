import { Button, FavoriteCheckbox, PokemonImage, TypeTag } from "@components"
import { ArrowReturnIco, SparklesIco } from "@assets"
import { FunctionComponent as FC } from "preact"
import { customLocalStorage } from "@stores"
import { TopAreaDesktopProps } from "./types"
import { formatPokeNumber } from "@utils"
import { useNavigation } from "@hooks"
import { PATHS } from "@types"
import * as S from "./styles"

export const TopAreaMobile: FC<TopAreaDesktopProps> = ({
    pokemonId, setRemovePointerEvents, beforeReturnPokedex, pokemonData
}) => {

    const { navigate } = useNavigation()
    const pokeNumber = formatPokeNumber(pokemonId)?.toUpperCase()

    const handleClickReturnPokedex = async () => {
        setRemovePointerEvents(true)
        if(beforeReturnPokedex) await beforeReturnPokedex()
        navigate(PATHS.POKEDEX, false)
    }

    return (
        <S.Component>
            <S.LeftSide>
                {pokemonId < 10000 ?
                    <S.PokeNumber children={pokeNumber}/> :
                    <S.SparklesContainer children={<SparklesIco />}/>
                }
                {pokemonData?.types.map(
                    type => <TypeTag pokemonType={type} size="smaller"/>
                )}
            </S.LeftSide>
            <S.Center>
                <S.PokemonName>
                    {pokemonData?.name ?? ""}
                </S.PokemonName>
                <PokemonImage
                    imageUrl={pokemonData?.imageUrl}
                    alt={pokemonData?.name ?? ""}
                    pokemonId={pokemonId}
                />
            </S.Center>
            <S.RightSide>
                <Button
                    preventNavOnClick
                    navigate={{ path: PATHS.POKEDEX, transition: false }}
                    onClick={handleClickReturnPokedex}
                    children={<ArrowReturnIco />}
                />
                <FavoriteCheckbox
                    checked={customLocalStorage.getIsPokemonFavorited(pokemonData?.id ?? 0)}
                    onClick={() => {
                        customLocalStorage.toggleFavoriteOfPokemon(pokemonData?.id ?? 0)
                    }}
                />
            </S.RightSide>
        </S.Component>
    )
}
