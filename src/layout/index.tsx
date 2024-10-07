import { FunctionComponent } from "preact"
import { NavigationProvider, useDocumentTitle } from "@hooks"
import { BackgroundImage, Header } from "@components"
import * as S from "./styles"

export const Layout: FunctionComponent = ({ children }) => {
    useDocumentTitle()

    return (
        <S.Layout>
            <BackgroundImage />
            <NavigationProvider staticChildren={<Header />}>
                {children}
            </NavigationProvider>
        </S.Layout>
    )
}
