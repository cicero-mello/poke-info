import { LocationProvider, Router } from "preact-iso"
import { Layout } from "@layout"
import { PATHS } from "@types"
import * as P from "@pages"

const AppRouter = () => (
    <Router>
        <P.Home path={PATHS.HOME} />
        <P.Pokedex path={PATHS.POKEDEX} />
        <P.Pokemon path={PATHS.POKEMON} />
        <P.FindPokemon path={PATHS.FIND_POKEMON} />
        <P.Berries path={PATHS.BERRIES} />
        <P.About path={PATHS.ABOUT} />
        <P.NotFound default />
    </Router>
)

export const App = () => (
    <LocationProvider>
        <Layout>
            <AppRouter />
        </Layout>
	</LocationProvider>
)
