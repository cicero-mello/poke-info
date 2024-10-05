import { FC } from "react"
import { useRoute } from "preact-iso"

export const Pokemon: FC = () => {
    const  { params } = useRoute()

    return (
        <div>
            <h1> Pokemon: { params.id } </h1>
        </div>
    )
}
