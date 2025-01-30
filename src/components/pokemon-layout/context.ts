import { PokemonLayoutContextProps } from "./types"
import { useContext } from "preact/hooks"
import { createContext } from "preact"

export const PokemonLayoutContext = createContext<PokemonLayoutContextProps | undefined>(undefined)

export const usePokemonLayoutContext = () => {
    const context = useContext(PokemonLayoutContext)
    if(!context){
        throw new Error(
            "usePokemonLayoutContext need to be used inside PokemonLayoutContext.Provider"
        )
    }
    return context
}
