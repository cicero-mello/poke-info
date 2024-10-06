import { FC } from "react"
import { Header } from "@components"
import { useDocumentTitle } from "@hooks"

export const Layout: FC = ({ children }) => {
    useDocumentTitle()

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
