import { useDocumentTitle } from "@hooks"

export const NotFound = () => {
    useDocumentTitle("404")

    return (
        <h1> Not Found </h1>
    )
}
