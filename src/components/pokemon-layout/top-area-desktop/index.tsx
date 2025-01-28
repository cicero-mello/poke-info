import { Button, FavoriteCheckbox, PokemonImage, TypeTag } from "@components"
import { ArrowReturnIco, SparklesIco } from "@assets"
import { FunctionComponent as FC } from "preact"
import { customLocalStorage } from "@stores"
import { TopAreaDesktopProps } from "./types"
import { formatPokeNumber } from "@utils"
import { useNavigation } from "@hooks"
import { PATHS } from "@types"
import * as S from "./styles"

export const TopAreaDesktop: FC<TopAreaDesktopProps> = ({
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
        <S.TopArea>
            {pokemonId < 10000 && <S.PokeNumber children={pokeNumber}/>}
            {pokemonId >= 10000 && (
                <S.SparklesContainer>
                    <SparklesIco />
                </S.SparklesContainer>
            )}
            <PokemonImage
                imageUrl={pokemonData?.imageUrl}
                alt={pokemonData?.name ?? ""}
                pokemonId={pokemonId}
            />
            <S.TagsAndFavorite>
                <S.TypeTags>
                    {pokemonData?.types.map(type => <TypeTag pokemonType={type}/>)}
                </S.TypeTags>
                <FavoriteCheckbox
                    checked={customLocalStorage.getIsPokemonFavorited(pokemonData?.id ?? 0)}
                    onClick={() => {
                        customLocalStorage.toogleFavoriteOfPokemon(pokemonData?.id ?? 0)
                    }}
                />
            </S.TagsAndFavorite>
            <Button
                preventNavOnClick
                navigate={{ path: PATHS.POKEDEX, transition: false }}
                onClick={handleClickReturnPokedex}
            >
                <ArrowReturnIco />
            </Button>
        </S.TopArea>
    )
}
