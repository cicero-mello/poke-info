import { FunctionComponent as FC } from "preact/compat"
import { AbilitiesSectionProps } from "./types"
import { InfoButton } from "@components"
import { useNavigation } from "@hooks"
import { PATHS } from "@types"
import * as S from "./styles"

export const AbilitiesSection: FC<AbilitiesSectionProps> = ({
    pokemonName, queryData
}) => {
    const {navigate} = useNavigation()

    const hiddenAbilityText = queryData.isHidden && (
        `In ${pokemonName}, is a Hidden Ability.`
    )

    return (
        <S.Section>
            <S.Title> {queryData.name} </S.Title>
            <S.Text> {queryData.description} </S.Text>

            {hiddenAbilityText &&
                <S.Text> {hiddenAbilityText} </S.Text>
            }

            <S.Line />

            <S.Title>
                Other Pokémons with {name}:
            </S.Title>

            <S.List>
                {queryData.otherPokemonsWithThisAbility.map((pokemon) => (
                    <S.ListItem>
                        <InfoButton
                            children={pokemon.name}
                            onClick={() => navigate(
                                PATHS.POKEDEX + "/" + pokemon.id,
                                false
                            )}
                        />
                    </S.ListItem>
                ))}
            </S.List>
        </S.Section>
    )
}
