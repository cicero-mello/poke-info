import { FunctionalComponent as FC } from "preact"
import { PokemonMoreInfoProps } from "./types"
import { useQueries } from "./use-queries"
import { InfoButton, InfoLine, Spinner } from "@components"
import * as S from "./styles"

export const PokemonMoreInfo: FC<PokemonMoreInfoProps> = ({
    pokemonId
}) => {
    const { data, isLoading } = useQueries(pokemonId)

    return (
        <S.Component $isLoading={isLoading}>
            {isLoading && <Spinner />}

            <S.Description>
                {data.description}
            </S.Description>

            <InfoLine title="Abilities">
                {data.abilities.map((ability) => (
                    <InfoButton children={ability.name} />
                ))}
            </InfoLine>

            <S.Proportions>
                <InfoLine
                    title="Weight"
                    children={data.weight + "kg"}
                />
                <InfoLine
                    title="Height"
                    children={data.height + "m"}
                />
            </S.Proportions>

            <InfoLine
                title="Genera"
                children={data.genera}
            />

            <InfoLine
                title="Shape"
                children={data.shape}
            />

            <InfoLine
                title="Habitat"
                children={data.habitat}
            />

            <InfoLine
                title="Egg Groups"
                children={data.eggGroups}
            />
        </S.Component>
    )
}
