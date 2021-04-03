import { FunctionComponent } from "react"
import { Route, Switch } from "react-router-dom"
import * as Screen from "../screens"
import { PATHS } from "./paths"

export const Routes: FunctionComponent = () => {

    return (
        <Switch>
            <Route exact path={PATHS.HOME}>
                <Screen.Home />
            </Route>

            <Route exact path={PATHS.ABOUT}>
                <Screen.About />
            </Route>

            <Route exact path={PATHS.CANDIES}>
                <Screen.Candies />
            </Route>

            <Route exact path={PATHS.POKEDEX}>
                <Screen.Pokedex />
            </Route>

            <Route path={PATHS.NOT_FOUND}>
                <Screen.NotFound />
            </Route>
        </Switch>
    )
}
