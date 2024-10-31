import { useEffect, useRef } from "preact/hooks"
import { RefObject } from "preact"
import { debounce } from "@utils"

export const useFetchNextPage = (
    scrollElementRef: RefObject<HTMLElement>,
    fetchNextPage: () => void,
    isFetchingNextPage: boolean,
    hasNextPage: boolean
) => {
    const hasNextPageRef = useRef(hasNextPage)
    const isFetchingNextPageRef = useRef(
        isFetchingNextPage
    )

    hasNextPageRef.current = hasNextPage
    isFetchingNextPageRef.current = isFetchingNextPage

    useEffect(() => {
        const debouncedFetchNextPage = debounce(fetchNextPage, 50)

        if(!scrollElementRef.current) return

        const scroll = () => {
            const canFetchNextPage = (
                !isFetchingNextPageRef.current &&
                !!hasNextPageRef.current
            )

            if(!canFetchNextPage || !scrollElementRef.current) return

            const scrollTop = scrollElementRef.current.scrollTop
            const scrollHeight = scrollElementRef.current.scrollHeight
            const clientHeight = scrollElementRef.current.clientHeight

            const isToFetchNextPage = (
                (scrollHeight - scrollTop) <= clientHeight * 3
            )

            if(isToFetchNextPage && !isFetchingNextPageRef.current) {
                debouncedFetchNextPage()
            }
        }

        scroll()

        scrollElementRef.current.addEventListener("scroll", scroll)

        return () => {
            if(!scrollElementRef.current) return
            scrollElementRef.current.removeEventListener("scroll", scroll)
        }
    }, [])
}
