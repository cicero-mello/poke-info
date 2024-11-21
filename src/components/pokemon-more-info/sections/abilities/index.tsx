import { FunctionComponent as FC } from "preact/compat"
import { AbilitiesSectionProps } from "./types"
import * as S from "./styles"
import { InfoButton } from "@components"
import { useNavigation } from "@hooks"
import { PATHS } from "@types"

export const AbilitiesSection: FC<AbilitiesSectionProps> = ({
    pokemonName, description, isHidden, name,
    otherPokemonsWithThisAbility
}) => {
    const {navigate} = useNavigation()

    const hiddenAbilityText = isHidden && (
        `In ${pokemonName}, is a Hidden Ability.`
    )

    return (
        <S.Section>
            <S.Title> {name} </S.Title>
            <S.Text> {description} </S.Text>

            {hiddenAbilityText &&
                <S.Text> {hiddenAbilityText} </S.Text>
            }

            <S.Line />

            <S.Title>
                Other Pokémons with {name}:
            </S.Title>

            <S.List>
                {otherPokemonsWithThisAbility.map((pokemon) => (
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
