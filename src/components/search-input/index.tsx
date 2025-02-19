import { delay, normalizePokemonName } from "@utils"
import { FunctionComponent as FC } from "preact"
import { useRef, useState } from "preact/hooks"
import { Spinner } from "@components/spinner"
import { MagnifyingGlassIco } from "@assets"
import { SearchInputProps } from "./types"
import { useFocusOrigin } from "@hooks"
import * as S from "./styles"

export const SearchInput: FC<SearchInputProps> = ({
    onSearch
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isNotFound, setIsNotFound] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const focusOrigin = useFocusOrigin(inputRef)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const inputValue = formData.get("search") as string
        const searchFinished = await onSearch(normalizePokemonName(inputValue))

        if (!!searchFinished?.notFound) {
            setIsNotFound(true)
            await delay(1800)
            setIsNotFound(false)
        }
        setIsLoading(false)
    }

    return (
        <S.Component
            onSubmit={handleSubmit}
            $isLoading={isLoading}
            $isNotFound={isNotFound}
            $focusOrigin={focusOrigin}
        >
            <S.Input
                name="search"
                autoComplete="off"
                spellcheck={false}
                autoCorrect="off"
                autoCapitalize="off"
                ref={inputRef}
            />
            <S.SearchButton $isLoading={isLoading}>
                <MagnifyingGlassIco />
                <Spinner />
            </S.SearchButton>
            {isNotFound &&
                <S.NotFoundMessage>
                    Not Found
                </S.NotFoundMessage>
            }
        </S.Component>
    )
}
