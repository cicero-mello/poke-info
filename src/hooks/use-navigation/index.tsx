
import { Navigate, NavigationProviderProps, TransitionState, UseNavigation } from "./types"
import { createContext, FunctionComponent } from "preact"
import { TransitionWrapper } from "./styles"
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

export const NavigationProvider: FunctionComponent<NavigationProviderProps> = ({
    children, staticChildren
}) => {
    const { route } = useLocation()
    const [transitionState, setTransitionState] = useState<TransitionState>()

    const navigate: Navigate = async (path, transition = true) => {
        if(!transition){
            route(path)
            return
        }
        setTransitionState("fadeOut")
        await delay(10)
        route(path)
        setTransitionState("fadeIn")
    }

    return (
        <NavigationContext.Provider value={{ navigate }}>
            {staticChildren && staticChildren}
            <TransitionWrapper $state={transitionState}>
                {children}
            </TransitionWrapper>
        </NavigationContext.Provider>
    )
}
