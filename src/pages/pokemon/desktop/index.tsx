import { Evolution, Moves, PokemonLayout, PokemonMoreInfo, PokemonNameAndStats, TabViewer } from "@components"
import { FunctionComponent as FC } from "preact"
import { useState } from "preact/hooks"
import { AnimationType } from "./types"
import { useRoute } from "preact-iso"
import { DesktopProps } from "./types"
import { delay } from "@utils"
import * as S from "./styles"

export const Desktop: FC<DesktopProps> = ({
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
            pokemonId={+params.id}
            beforeReturnPokedex={revertAnimations}
        >
            <S.LeftSide $animationType={animation}>
                <S.Fan />
                <PokemonNameAndStats pokeId={+params.id} bigMode />
            </S.LeftSide>
            <S.RightSide $animationType={animation}>
                <TabViewer
                    pokemonType={pokemonMainType}
                    tabNames={["More Info", "Evolution", "Moves"]}
                    tabPanels={[
                        <PokemonMoreInfo pokemonId={+params.id}/>,
                        <Evolution pokemonId={+params.id}/>,
                        <Moves pokemonId={+params.id}/>
                    ]}
                />
            </S.RightSide>
        </PokemonLayout>
    )
}
