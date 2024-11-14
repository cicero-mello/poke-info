
import { Navigate, NavigationProviderProps, TransitionState, UseNavigation } from "./types"
import { createContext, FunctionComponent } from "preact"
import { TransitionWrapper } from "./styles"
import { useContext, useRef, useState } from "preact/hooks"
import { useLocation } from "preact-iso"
import { delay } from "@utils"

const NavigationContext = createContext<UseNavigation>({
    navigate: async () => {},
    getPreviusPath: () => ""
})

/**
 * Navigate between pages using transitions.
 */
export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider: FunctionComponent<NavigationProviderProps> = ({
    children, staticChildren
}) => {
    const { route, path } = useLocation()
    const [transitionState, setTransitionState] = useState<TransitionState>()
    const previusPath = useRef(path)

    const navigate: Navigate = async (targetPath, transition = true) => {
        previusPath.current = path
        if(!transition){
            route(targetPath)
            return
        }
        setTransitionState("fadeOut")
        await delay(10)
        route(targetPath)
        setTransitionState("fadeIn")
    }

    const getPreviusPath = (): string => previusPath.current

    return (
        <NavigationContext.Provider value={{ navigate, getPreviusPath }}>
            {staticChildren && staticChildren}
            <TransitionWrapper $state={transitionState}>
                {children}
            </TransitionWrapper>
        </NavigationContext.Provider>
    )
}
