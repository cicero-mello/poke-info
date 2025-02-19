export const scrollElementToTop = (
    element: HTMLElement
): Promise<void> => new Promise((resolve) => {
    if (element.scrollTop <= 0) resolve()

    let scrollLoopAnimationId: number

    const automaticScrollLoop = (resolve: () => void) => {
        let scrollStep = element.scrollTop / 8

        if(scrollStep <= 1) scrollStep = 1

        element.scrollBy(0, -scrollStep)

        if(element.scrollTop <= 0) {
            cancelAnimationFrame(scrollLoopAnimationId)
            resolve()
        } else {
            scrollLoopAnimationId = requestAnimationFrame(
                () => automaticScrollLoop(resolve)
            )
        }
    }

    automaticScrollLoop(resolve)
})

export const scrollElementToBottom = (
    element: HTMLElement,
    pxs?: number
): Promise<void> => new Promise((resolve) => {
    const maxScrollTop = element.scrollHeight - element.clientHeight
    const targetScrollTop = (
        pxs ?
            Math.min(element.scrollTop + pxs, maxScrollTop) :
            maxScrollTop
    )

    const isElementAtTarget = () => (
        element.scrollTop >= targetScrollTop
    )

    if (isElementAtTarget()) {
        resolve()
        return
    }

    let scrollLoopAnimationId: number

    const automaticScrollLoop = (resolve: () => void) => {
        const distance = targetScrollTop - element.scrollTop
        let scrollStep = distance / 8
        if (scrollStep <= 1) scrollStep = 1

        element.scrollBy(0, scrollStep)

        if (isElementAtTarget()) {
            cancelAnimationFrame(scrollLoopAnimationId)
            resolve()
        } else {
            scrollLoopAnimationId = requestAnimationFrame(
                () => automaticScrollLoop(resolve)
            )
        }
    }

    automaticScrollLoop(resolve)
})

