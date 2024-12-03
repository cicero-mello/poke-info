import { InfoButton, InfoLine, PokemonPixelArt } from "@components"
import { FunctionComponent as FC } from "preact"
import { EvolutionItemProps } from "./types"
import { useNavigation } from "@hooks"
import { capitalize } from "@utils"
import { PATHS } from "@types"
import * as S from "./styles"

export const EvolutionItem: FC<EvolutionItemProps> = ({
    specieName, specieId, isBaby, incenseToGetBaby,
    requirements, evolvesFrom, pixelArtUrl, onPixelArtLoad
}) => {
    const { navigate } = useNavigation()

    const getPokemonOriginText = () => {
        if(!!isBaby) return "It's a Baby Pokémon"
        if(!evolvesFrom) return "First of evolution chain"
        return `Evolves from ${evolvesFrom.specieName}`
    }

    return (
        <S.Component>
            <PokemonPixelArt
                pokemonId={specieId}
                imageUrl={pixelArtUrl}
                alt={specieName + " pixel art"}
                onLoad={onPixelArtLoad}
            />
            <S.Infos>
                <S.PokemonName children={specieName} />
                <S.Text children={getPokemonOriginText()} />
                {!!isBaby && (
                    <>
                        <S.HowToGet children="How to get:" />
                        <S.Text>
                            Use some of {specieName} evolutions along
                            with another Pokémon from the same
                            Egg Group (or Ditto) in the breeding system.
                        </S.Text>
                        <S.Text>
                            You can do this, for example, in the
                            Day Care or Nursery.
                        </S.Text>
                        {!!incenseToGetBaby &&
                            <S.Text>
                                The evolved form of {specieName} needs to hold
                                the {incenseToGetBaby.toUpperCase()} during
                                the process.
                            </S.Text>
                        }
                    </>
                )}
                {requirements.map((requirement, index) => (
                    <>
                        <S.HowToGet>
                            How to evolve:
                            <span>
                                {requirements.length > 1 && ` (${index + 1})`}
                            </span>
                        </S.HowToGet>
                        <InfoLine title="Trigger">
                            {requirement.trigger}
                        </InfoLine>
                        {!!requirement.gender &&
                            <InfoLine title="Gender">
                                {capitalize(requirement.gender)}
                            </InfoLine>
                        }
                        {!!requirement.item &&
                            <InfoLine title="Item">
                                {requirement.item}
                            </InfoLine>
                        }
                        {!!requirement.heldItem &&
                            <InfoLine title="Held Item">
                                {requirement.item}
                            </InfoLine>
                        }
                        {!!requirement.knowMoveType &&
                            <InfoLine title="Need to know">
                                {requirement.knowMoveType.toUpperCase()} move
                            </InfoLine>
                        }
                        {!!requirement.location &&
                            <InfoLine title="Location">
                                {requirement.location}
                            </InfoLine>
                        }
                        {!!requirement.minLevel &&
                            <InfoLine title="Min. Level">
                                {requirement.minLevel}
                            </InfoLine>
                        }
                        {!!requirement.minAffection &&
                            <InfoLine title="Min. Affection">
                                {requirement.minAffection}
                            </InfoLine>
                        }
                        {!!requirement.minBeauty &&
                            <InfoLine title="Min. Beauty">
                                {requirement.minBeauty}
                            </InfoLine>
                        }
                        {!!requirement.minHappiness &&
                            <InfoLine title="Min. Happiness">
                                {requirement.minHappiness}
                            </InfoLine>
                        }
                        {!!requirement.needsOverworldRain &&
                            <InfoLine title="Weather">
                                Needs overworld rain
                            </InfoLine>
                        }
                        {!!requirement.partySpecies &&
                            <InfoLine title="Party">
                                Need to have {requirement.partySpecies}
                            </InfoLine>
                        }
                        {!!requirement.partyType &&
                            <InfoLine title="Party">
                                Need to have some Pokémon of&nbsp;
                                {requirement.partyType.toUpperCase()} type
                            </InfoLine>
                        }
                        {!!requirement.relativePhysicalStats &&
                            <InfoLine title="Physical Stats">
                                {requirement.relativePhysicalStats.toUpperCase()}
                            </InfoLine>
                        }
                        {!!requirement.timeOfDay &&
                            <InfoLine title="Time of day">
                                {capitalize(requirement.timeOfDay)}
                            </InfoLine>
                        }

                        {/* TODO prop anchor no info button */}
                        {!!requirement.tradeSpecie &&
                            <InfoLine title="Pokémon to trade">
                                <InfoButton
                                    children={requirement.tradeSpecie.name}
                                    onClick={() => navigate(
                                        PATHS.POKEDEX + "/" + requirement.tradeSpecie?.id+"",
                                        false
                                    )}
                                />
                            </InfoLine>
                        }

                        {!!requirement.turnUpsideDown3DS &&
                            <InfoLine title="3DS condition">
                                Need to turn upside down
                            </InfoLine>
                        }
                    </>
                ))}
            </S.Infos>
        </S.Component>
    )
}
