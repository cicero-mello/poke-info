import { Button, FavoriteCheckbox, PokemonImage, TypeTag } from "@components"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { customLocalStorage } from "@stores"
import { PokemonDataProps } from "./types"
import { formatPokeNumber } from "@utils"
import { ArrowReturnIco } from "@assets"
import { useRoute } from "preact-iso"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const PokemonData: FC<PokemonDataProps> = ({
    pokemonId,
    withEntryAnimation
}) => {
    const  { params } = useRoute()
    const pokeId = pokemonId ?? params.id
    const pokeNumber = formatPokeNumber(pokeId)?.toUpperCase()

    const { data } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokeId.toString() }),
    })

    return (
        <S.Component $withEntryAnimation={!!withEntryAnimation}>

            <S.TopArea>
                <S.PokeNumber children={pokeNumber}/>
                <PokemonImage
                    imageUrl={data?.imageUrl ?? ""}
                    alt={data?.name ?? ""}
                    pokemonId={pokemonId}
                />
                <S.TagsAndFavorite>
                    <S.TypeTags>
                        {data?.types.map(type => <TypeTag pokemonType={type}/>)}
                    </S.TypeTags>
                    <FavoriteCheckbox
                        checked={customLocalStorage.getIsPokemonFavorited(data?.id ?? 0)}
                        onClick={() => {
                            customLocalStorage.toogleFavoriteOfPokemon(data?.id ?? 0)
                        }}
                    />
                </S.TagsAndFavorite>
                <Button navigate={{ path: PATHS.POKEDEX, transition: false }}>
                    <ArrowReturnIco />
                </Button>
            </S.TopArea>

            <S.DownAreaContainer>
                <S.DownArea
                    $withEntryAnimation={!!withEntryAnimation}
                    $pokemonType={data?.types[0] ?? "normal"}
                >
                    <S.Content>
                        {/* <PokemonNameAndStats pokeId={pokeId} bigMode /> */}
                    </S.Content>
                </S.DownArea>
            </S.DownAreaContainer>

        </S.Component>
    )
}
