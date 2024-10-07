
import { createContext, FunctionComponent } from "preact"
import { FADE_TIME, TransitionWrapper } from "./styles"
import { Navigate, TransitionState, UseNavigation } from "./types"
import { useContext, useState } from "preact/hooks"
import { useLocation } from "preact-iso"
import { delay } from "@utils"

const NavigationContext = createContext<UseNavigation>({
    navigate: async () => {}
})

/**
 * Navigate between pages using transitions.
 */
export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider: FunctionComponent = ({
    children
}) => {
    const { route } = useLocation()
    const [transitionState, setTransitionState] = useState<TransitionState>()

    const navigate: Navigate = async (path, transition = true) => {
        if(!transition){
            route(path)
            return
        }
        setTransitionState("fadeOut")
        await delay(FADE_TIME)
        route(path)
        setTransitionState("fadeIn")
        await delay(FADE_TIME)
    }

    return (
        <NavigationContext.Provider value={{ navigate }}>
            <TransitionWrapper $state={transitionState}>
                {children}
            </TransitionWrapper>
        </NavigationContext.Provider>
    )
}
