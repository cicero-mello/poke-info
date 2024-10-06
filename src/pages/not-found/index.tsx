import { useDocumentTitle } from "@hooks"
import { FC } from "react"

export const NotFound: FC = () => {
    useDocumentTitle("404")

    return (
        <h1> Not Found </h1>
    )
}
