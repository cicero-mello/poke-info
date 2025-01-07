import { FunctionComponent as FC } from "preact/compat"
import { AbilitiesSectionProps } from "./types"
import { InfoButton } from "@components"
import { PATHS } from "@types"
import * as S from "./styles"

export const AbilitiesSection: FC<AbilitiesSectionProps> = ({
    queryData
}) => {
    const hiddenAbilityText = queryData.isHidden && (
        `In ${queryData.pokemonName}, is a Hidden Ability.`
    )

    const exclusiveAbility = queryData.otherPokemonsWithThisAbility.length === 0 && (
        `Only ${queryData.pokemonName} have ${queryData.name}!`
    )

    return (
        <S.Section>
            <S.Title> {queryData.name} </S.Title>
            <S.Text> {queryData.description} </S.Text>

            {hiddenAbilityText &&
                <S.Text> {hiddenAbilityText} </S.Text>
            }

            {exclusiveAbility &&
                <S.Text>{exclusiveAbility}</S.Text>
            }

            {!exclusiveAbility && (
                <>
                    <S.Line />

                    <S.Title>
                        Other Pokémons with {queryData.name}:
                    </S.Title>

                    <S.List>
                        {queryData.otherPokemonsWithThisAbility.map((pokemon) => (
                            <S.ListItem>
                                <InfoButton
                                    children={pokemon.name}
                                    navigate={{
                                        path: PATHS.POKEDEX + "/" + pokemon.id,
                                        transition: false
                                    }}
                                />
                            </S.ListItem>
                        ))}
                    </S.List>
                </>
            )}
        </S.Section>
    )
}
