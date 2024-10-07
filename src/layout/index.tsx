import { FunctionComponent } from "preact"
import { NavigationProvider, useDocumentTitle } from "@hooks"
import { BackgroundImage, Header } from "@components"
import * as S from "./styles"

export const Layout: FunctionComponent = ({ children }) => {
    useDocumentTitle()

    return (
        <S.Layout>
            <BackgroundImage />
            <Header />
            <S.LayoutWrapper>
                <NavigationProvider>
                    {children}
                </NavigationProvider>
            </S.LayoutWrapper>
        </S.Layout>
    )
}
