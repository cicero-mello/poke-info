import { useMovesSectionQueries } from "./sections/move-list/use-queries"
import { MainSection, MoveListSection } from "./sections"
import { CurrentSection, MovesProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { ArrowReturnIco } from "@assets"
import { useState } from "preact/hooks"
import { Spinner } from "@components"
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

    const movesSectionQuery = (
        (moves && currentSection.name === "moves") ?
        useMovesSectionQueries(moves, currentSection.versionGroupId)
        : undefined
    )

    const showMainSection = (
        currentSection.name === "main"
        && !pokemonQuery.isLoading
        && !!pokemonQuery.data
    )

    const showMovesSection = (
        currentSection.name === "moves"
        && !!movesSectionQuery
        && !movesSectionQuery.isLoading
    )

    const versionGroupIds = (
        pokemonQuery.data ?
        [...pokemonQuery.data.movesPerVersionGroupId.keys()]
        : []
    )

    const isLoading = (
        pokemonQuery.isLoading
        || !!movesSectionQuery?.isLoading
    )

    const handleClickReturn = () => {
        setCurrentSection({name: "main"})
    }

    return (
        <S.Component $isLoading={isLoading}>
            <Spinner />
            <S.ReturnToMainSection
                onClick={handleClickReturn}
                $hide={currentSection.name === "main" || isLoading}
            >
                <ArrowReturnIco />
            </S.ReturnToMainSection>
            {showMainSection &&
                <MainSection
                    versionGroupIds={versionGroupIds}
                    setCurrentSection={setCurrentSection}
                />
            }
            {showMovesSection &&
                <MoveListSection
                    versionName={currentSection.versionName}
                    moves={movesSectionQuery.moves}
                />
            }
        </S.Component>
    )
}
