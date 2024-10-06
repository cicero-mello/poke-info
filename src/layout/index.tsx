import { Header } from "@components"
import { FunctionComponent } from "preact"
import { useDocumentTitle } from "@hooks"

export const Layout: FunctionComponent = ({ children }) => {
    useDocumentTitle()

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
