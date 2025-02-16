import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useResetSessionStorageOnRefresh } from "@hooks"
import { LocationProvider, Router } from "preact-iso"
import { Layout } from "@layout"
import { PATHS } from "@types"
import * as P from "@pages"

const queryClient = new QueryClient()

const AppRouter = () => (
    <Router>
        <P.Home path={PATHS.HOME} />
        <P.Pokedex path={PATHS.POKEDEX} />
        <P.Pokemon path={PATHS.POKEMON} />
        <P.FindPokemon path={PATHS.FIND_POKEMON} />
        <P.Berry path={PATHS.BERRY} />
        <P.About path={PATHS.ABOUT} />
        <P.NotFound default />
    </Router>
)

export const App = () => {
    useResetSessionStorageOnRefresh()

    return (
        <LocationProvider>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <AppRouter />
                </Layout>
            </QueryClientProvider>
        </LocationProvider>
    )
}
