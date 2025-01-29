import { Evolution, Moves, PokemonLayout, PokemonMoreInfo, PokemonNameAndStats, TabViewer} from "@components"
import { AnimationType, MobileProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useState } from "preact/hooks"
import { useRoute } from "preact-iso"
import { delay } from "@utils"
import * as S from "./styles"

export const Mobile: FC<MobileProps> = ({
    pokemonMainType
}) => {
    const { params } = useRoute()
    const [animation, setAnimation] = useState<AnimationType>("init")

    const revertAnimations = async () => {
        setAnimation("none")
        await delay(10)
        requestAnimationFrame(() => {
            setAnimation("returning")
        })
        await delay(400)
    }

    return (
        <PokemonLayout
            isMobileMode
            pokemonId={+params.id}
            beforeReturnPokedex={revertAnimations}
        >
            <S.StatsSlot $animationType={animation}>
                <PokemonNameAndStats pokeId={+params.id} bigMode noName />
            </S.StatsSlot>

            <S.TabViewerSlot $animationType={animation}>
                <TabViewer
                    pokemonType={pokemonMainType}
                    tabNames={["More Info", "Evolution", "Moves"]}
                    tabPanels={[
                        <PokemonMoreInfo pokemonId={+params.id}/>,
                        <Evolution pokemonId={+params.id}/>,
                        <Moves pokemonId={+params.id}/>
                    ]}
                />
            </S.TabViewerSlot>
        </PokemonLayout>
    )
}
