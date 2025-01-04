import { useMovesSectionQueries } from "./sections/moves/user-queries"
import { MainSection, MovesSection } from "./sections"
import { CurrentSection, MovesProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { useState } from "preact/hooks"
import * as S from "./styles"
import * as api from "@api"

export const Moves: FC<MovesProps> = ({
    pokemonId
}) => {
    const [currentSection, setCurrentSection] = useState<CurrentSection>({
        name: "main"
    })

    const pokemonQuery = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokemonId+"" })
    })

    const moves = (
        (currentSection.name != "moves" || !pokemonQuery.data ) ? undefined :
        pokemonQuery.data.movesPerVersionGroupId.get(
            currentSection.versionGroupId
        )!
    )

    const movesSectionData = (
        moves ? useMovesSectionQueries(moves) : undefined
    )

    const showMainSection = (
        currentSection.name === "main"
        && !pokemonQuery.isLoading
        && !!pokemonQuery.data
    )

    const showMovesSection = (
        currentSection.name === "moves"
        && !!movesSectionData
        && !movesSectionData.isLoading
    )

    const versionGroupIds = (
        pokemonQuery.data ?
        [...pokemonQuery.data.movesPerVersionGroupId.keys()]
        : []
    )

    return (
        <S.Component>
            {showMainSection &&
                <MainSection
                    versionGroupIds={versionGroupIds}
                    setCurrentSection={setCurrentSection}
                />
            }
            {showMovesSection &&
                <MovesSection
                    versionName={currentSection.versionName}
                    moves={movesSectionData.moves}
                />
            }
        </S.Component>
    )
}
