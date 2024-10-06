import background from "@assets/background.png"
import { FunctionComponent } from "preact"
import { useDocumentTitle } from "@hooks"
import { useState } from "preact/hooks"
import { Header } from "@components"
import * as S from "./styles"

export const Layout: FunctionComponent = ({ children }) => {
    useDocumentTitle()
    const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false)

    return (
        <S.Layout>
            <S.BackgroundImage
                src={background}
                onLoad={() => setIsBackgroundLoaded(true)}
                $isLoaded={isBackgroundLoaded}
            />
            <Header />
            <S.LayoutWrapper>
                {children}
            </S.LayoutWrapper>
        </S.Layout>
    )
}
