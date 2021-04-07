import { FunctionComponent } from "react"
import { useHistory, useLocation } from "react-router-dom"
import logo from "src/assets/images/logo-header.png"
import { PATHS } from "src/routes/paths"
import * as S from "./styles"

export const Header: FunctionComponent = () => {

    const history = useHistory()
    const { pathname } = useLocation()

    return (
        <S.Component visible={pathname !== PATHS.HOME}>
            <S.Container>
                <S.Logo 
                    src={logo}
                    onClick={() => { history.push(PATHS.HOME) }}
                />
                <p>buttons</p>
            </S.Container>
        </S.Component>
    )
}
