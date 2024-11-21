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

    const mainSectionQueries = useMainSectionQueries(pokemonId)
    const abilitySectionQueries = (
        currentSection.name === "abilities" ?
        useAbilitySectionQueries(pokemonId, currentSection.abilityId)
        : undefined
    )

    const isLoading = (
        mainSectionQueries.isLoading
        || !!abilitySectionQueries?.isLoading
    )

    const showMainSection = (
        currentSection.name === "main"
        && !isLoading
    )

    const showAbilitiesSection = (
        currentSection.name === "abilities"
        && !!abilitySectionQueries
        && !isLoading
    )

    const handleClickReturn = () => {
        setCurrentSection({name: "main"})
    }

    return (
        <S.Component $isLoading={isLoading}>
            {isLoading && <Spinner />}
            {currentSection.name !== "main" && !isLoading &&
                <S.ReturnToMain onClick={handleClickReturn}>
                    <ArrowReturnIco />
                </S.ReturnToMain>
            }

            {showMainSection &&
                <MainSection
                    queryData={mainSectionQueries.data}
                    setCurrentSection={setCurrentSection}
                />
            }

            {showAbilitiesSection && abilitySectionQueries.data &&
                <AbilitiesSection
                    pokemonName={pokemonName}
                    queryData={abilitySectionQueries.data}
                />
            }

        </S.Component>
    )
}
