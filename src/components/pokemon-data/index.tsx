import { PokemonImage } from "@components/pokemon-image"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { PokemonDataProps } from "./types"
import { useRoute } from "preact-iso"
import * as S from "./styles"
import * as api from "@api"

export const PokemonData: FC<PokemonDataProps> = ({
    pokemonId,
    showOnlyTop
}) => {
    const  { params } = useRoute()
    const pokeId = pokemonId ?? params.id

    const { data } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokeId.toString() }),
    })

    return (
        <S.Component $showOnlyTop={!!showOnlyTop}>
            <S.TopArea>
                <PokemonImage
                    imageUrl={data?.imageUrl ?? ""}
                    alt={data?.name ?? ""}
                    pokemonId={pokemonId}
                />
            </S.TopArea>
            <S.ContentContainer>
                <S.Content $pokemonType={data?.types[0] ?? "normal"}>
                </S.Content>
            </S.ContentContainer>
        </S.Component>
    )
}
