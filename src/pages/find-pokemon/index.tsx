import { PokemonFloatingCard, VersionFloatingCard, NoEncountersFloatingCard } from "./components"
import { useEffect, useState } from "preact/hooks"
import { useAnimation } from "./animations"
import * as S from "./styles"
import * as api from "@api"

export const FindPokemon = () => {
    const { refs, animations } = useAnimation()

    const [versionGroupId, setVersionGroupId] = useState(0)
    const [
        encountersPerVersionId,
        setEncountersPerVersionId
    ] = useState<api.EncountersPerVersionId>()

    useEffect(() => {
        console.log(encountersPerVersionId)
    }, [encountersPerVersionId])

    const showVersionCard = (
        !!encountersPerVersionId &&
        encountersPerVersionId.size > 0
    )

    const showNoEncountersCard = (
        !!encountersPerVersionId &&
        encountersPerVersionId.size === 0
    )

    return (
        <S.Screen>
            <PokemonFloatingCard
                setEncountersPerVersionId={setEncountersPerVersionId}
                hideVersionFloatingCard={animations.hideVersionFloatingCard}
                showVersionFloatingCard={animations.showVersionFloatingCard}
                hideNoEncountersFloatingCard={animations.hideNoEncountersFloatingCard}
                showNoEncountersFloatingCard={animations.showNoEncountersFloatingCard}
            />
            {showVersionCard &&
                <VersionFloatingCard
                    versionGroupId={versionGroupId}
                    setVersionGroupId={setVersionGroupId}
                    componentRef={refs.versionFloatingCard}
                />
            }
            {showNoEncountersCard &&
                <NoEncountersFloatingCard
                    componentRef={refs.noEncountersFloatingCard}
                />
            }
        </S.Screen>
    )
}
