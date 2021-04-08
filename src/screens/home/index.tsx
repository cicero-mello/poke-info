import { FunctionComponent, useState,  useEffect } from "react"
import { useHistory } from "react-router-dom"
import logo from "src/assets/images/logo.png"
import { PATHS } from "src/routes/paths"
import { HomeButton } from "src/components"
import * as S from "./styles"

export const Home: FunctionComponent = () => {

    const [openScreen, setOpenScreen] = useState<boolean>(false)
    const [closeScreen, setCloseScreen] = useState<boolean>(false)
    const history = useHistory()

    const changeScreen = (path: string) => {
        if(!closeScreen) {
            setCloseScreen(true)
            setTimeout(() => {
                history.push(path)
            }, 300)
        }
    }

    useEffect(() => {
        setOpenScreen(true)
    },[])

    return (
        <S.Page closeScreen={closeScreen} openScreen={openScreen}>
            <S.Image src={logo}/>
            <S.ButtonContainer>
                <HomeButton
                    text="Where do I find a Pokémon ?"
                    onClick={() => { changeScreen(PATHS.FIND_POKEMON) }}
                />
                <HomeButton
                    text="My Pokedex"
                    onClick={() => { changeScreen(PATHS.POKEDEX) }}
                />
                <HomeButton
                    text="Candies"
                    onClick={() => { changeScreen(PATHS.CANDIES) }}
                />
            </S.ButtonContainer>
        </S.Page>
    )
}
