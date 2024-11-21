import { MainSection, AbilitiesSection, useMainSectionQueries, useAbilitySectionQueries } from "./sections"
import { CurrentSection, PokemonMoreInfoProps } from "./types"
import { FunctionalComponent as FC } from "preact"
import { ArrowReturnIco } from "@assets"
import { useState } from "preact/hooks"
import { Spinner } from "@components"
import * as S from "./styles"

export const PokemonMoreInfo: FC<PokemonMoreInfoProps> = ({
    pokemonId, pokemonName
}) => {
    const [currentSection, setCurrentSection] = useState<CurrentSection>({
        name: "main"
    })

    const mainSection = useMainSectionQueries(pokemonId)
    const abilitySection = (
        currentSection.name === "abilities" ?
        useAbilitySectionQueries(pokemonId, currentSection.abilityId)
        : undefined
    )

    const isLoading = (
        mainSection.isLoading
        || !!abilitySection?.isLoading
    )

    const showMainSection = (
        currentSection.name === "main"
        && !isLoading
    )

    const showAbilitiesSection = (
        currentSection.name === "abilities"
        && !!abilitySection
        && !isLoading
    )

    return (
        <S.Component $isLoading={isLoading}>
            {isLoading && <Spinner />}
            {currentSection.name !== "main" &&
                <S.ReturnToMain
                    onClick={() => setCurrentSection({name: "main"})}
                >
                    <ArrowReturnIco />
                </S.ReturnToMain>
            }

            {showMainSection &&
                <MainSection
                    data={mainSection.data}
                    setCurrentSection={setCurrentSection}
                />
            }

            {showAbilitiesSection && abilitySection.data &&
                <AbilitiesSection
                    pokemonName={pokemonName}
                    {...abilitySection.data}
                />
            }

        </S.Component>
    )
}
