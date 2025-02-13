import { PongParams } from "./types"

export const startPong = ({
    container,
    item,
    horizontalSpeed,
    verticalSpeed
}: PongParams) => {
    const HORIZONTAL_SPEED = horizontalSpeed ?? 370 // Px/s
    const VERTICAL_SPEED = verticalSpeed ?? 200     // Px/s

    let boxTop = 0
    let boxLeft = 0
    let horizontalAnimationId: number
    let verticalAnimationId: number
    let lastVerticalTime = performance.now()
    let lastHorizontalTime = performance.now()

    const boxHitsContainerOn = (direction: "top" | "bottom" | "right" | "left") => {
        const containerRect = container.getBoundingClientRect()
        const boxRect = item.getBoundingClientRect()

        const boxTop = boxRect.top - containerRect.top
        const boxLeft = boxRect.left - containerRect.left
        const boxBottom = boxTop + boxRect.height
        const boxRight = boxLeft + boxRect.width

        if (direction === "top") return boxTop <= 0
        if (direction === "bottom") return boxBottom >= containerRect.height
        if (direction === "left") return boxLeft <= 0
        if (direction === "right") return boxRight >= containerRect.width
    }

    const moveLeft = (time: number) => {
        const deltaTime = (time - lastHorizontalTime) / 1000
        lastHorizontalTime = time

        boxLeft -= HORIZONTAL_SPEED * deltaTime
        item.style.left = boxLeft + "px"

        if (boxHitsContainerOn("left")) {
            horizontalAnimationId = requestAnimationFrame(moveRight)
            return
        }
        horizontalAnimationId = requestAnimationFrame(moveLeft)
    }

    const moveRight = (time: number) => {
        const deltaTime = (time - lastHorizontalTime) / 1000
        lastHorizontalTime = time

        boxLeft += HORIZONTAL_SPEED * deltaTime
        item.style.left = boxLeft + "px"

        if (boxHitsContainerOn("right")) {
            horizontalAnimationId = requestAnimationFrame(moveLeft)
            return
        }
        horizontalAnimationId = requestAnimationFrame(moveRight)
    }

    const moveUp = (time: number) => {
        const deltaTime = (time - lastVerticalTime) / 1000
        lastVerticalTime = time

        boxTop -= VERTICAL_SPEED * deltaTime
        item.style.top = boxTop + "px"

        if (boxHitsContainerOn("top")) {
            verticalAnimationId = requestAnimationFrame(moveDown)
            return
        }
        verticalAnimationId = requestAnimationFrame(moveUp)
    }

    const moveDown = (time: number) => {
        const deltaTime = (time - lastVerticalTime) / 1000
        lastVerticalTime = time

        boxTop += VERTICAL_SPEED * deltaTime
        item.style.top = boxTop + "px"

        if (boxHitsContainerOn("bottom")) {
            verticalAnimationId = requestAnimationFrame(moveUp)
            return
        }
        verticalAnimationId = requestAnimationFrame(moveDown)
    }

    horizontalAnimationId = requestAnimationFrame(moveRight)
    verticalAnimationId = requestAnimationFrame(moveDown)

    return () => {
        cancelAnimationFrame(horizontalAnimationId)
        cancelAnimationFrame(verticalAnimationId)
    }
}
