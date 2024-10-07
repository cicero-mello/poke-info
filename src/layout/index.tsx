import { FunctionComponent } from "preact"
import { useDocumentTitle } from "@hooks"
import { BackgroundImage, Header } from "@components"
import * as S from "./styles"

export const Layout: FunctionComponent = ({ children }) => {
    useDocumentTitle()

    return (
        <S.Layout>
            <BackgroundImage />
            <Header />
            <S.LayoutWrapper>
                {children}
            </S.LayoutWrapper>
        </S.Layout>
    )
}
