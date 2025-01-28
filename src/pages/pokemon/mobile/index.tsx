import { FunctionComponent as FC } from "preact"
import { PokemonLayout} from "@components"
import { useRoute } from "preact-iso"
import { MobileProps } from "./types"

export const Mobile: FC<MobileProps> = ({

}) => {
    const { params } = useRoute()

    return (
        <PokemonLayout
            isMobileMode
            pokemonId={+params.id}
            // beforeReturnPokedex={revertAnimations}
        >
           MOBILE CONTENT
            {/* <PokemonNameAndStats pokeId={+params.id} bigMode />
            <TabViewer
                pokemonType={pokemonMainType}
                tabNames={["More Info", "Evolution", "Moves"]}
                tabPanels={[
                    <PokemonMoreInfo pokemonId={+params.id}/>,
                    <Evolution pokemonId={+params.id}/>,
                    <Moves pokemonId={+params.id}/>
                ]}
            />   */}
        </PokemonLayout>
    )
}
