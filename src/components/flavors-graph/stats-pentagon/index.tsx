import { useEffect, useLayoutEffect, useRef } from "preact/hooks"
import { getPoints, getPointsValues } from "./core"
import { FunctionComponent as FC } from "preact"
import { StatsPentagonProps } from "./types"
import * as S from "./styles"

export const StatsPentagon: FC<StatsPentagonProps> = ({
    pentagonSize,
    spicy = 0, dry = 0, sweet = 0, bitter = 0, sour = 0,
    animationTime, animationDelay
}) => {
    const polygonRef = useRef<SVGPolygonElement>(null)
    const previousPointsValues = useRef<number[]>([])

    const updatePoints = (pointsValues: number[]) => {
        if(!polygonRef.current) return
        const points = getPoints(pointsValues, pentagonSize)
        polygonRef.current.setAttribute("points", points)
    }

    const animatePoints = (
        currentPointsValues: number[],
        desiredPointsValues: number[],
        duration = 240
    ) => {
        let animationTimestamp: number | null = null

        const step = (screenTimestamp: number) => {
            if(animationTimestamp === null) animationTimestamp = screenTimestamp

            const currentAnimationTime = screenTimestamp - animationTimestamp
            const progress = Math.min(currentAnimationTime / duration, 1)
            const isAnimationFinished = progress === 1

            const stepPointsValues = currentPointsValues.map((currentPointValue, i) => (
                currentPointValue + (desiredPointsValues[i] - currentPointValue) * progress
            ))

            updatePoints(stepPointsValues)

            if(!isAnimationFinished){
                requestAnimationFrame(step)
                return
            }
            previousPointsValues.current = desiredPointsValues
        }

        requestAnimationFrame(step)
    }

    useEffect(() => {
        const newPointsValues = getPointsValues({
            pentagonSize, spicy, dry, sweet, bitter, sour
        })

        if(animationDelay){
            setTimeout(() => {
                animatePoints(previousPointsValues.current, newPointsValues, animationTime)
            }, animationDelay)
            return
        }

        animatePoints(previousPointsValues.current, newPointsValues, animationTime)
    }, [pentagonSize, spicy, dry, sweet, bitter, sour])

    useLayoutEffect(() => {
        const initialPointsValues = getPointsValues({
            pentagonSize, spicy, dry, sweet, bitter, sour
        })
        previousPointsValues.current = initialPointsValues
        animatePoints(previousPointsValues.current, initialPointsValues, animationTime)
    }, [])

    return (
        <S.Svg $pentagonSize={pentagonSize}>
            <polygon ref={polygonRef} />
        </S.Svg>
    )
}
