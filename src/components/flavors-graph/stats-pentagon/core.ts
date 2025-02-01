import { GetPointsValuesParams } from "./types"

const MIN_VISUAL_STAT_POINT_VALUE = 10
const MAX_POTENCY = 40 + MIN_VISUAL_STAT_POINT_VALUE

export const getPointValue = (potency: number, pentagonSize: number) => {
    const usedPotency = potency > MAX_POTENCY ? MAX_POTENCY : potency
    return (usedPotency*(pentagonSize/2))/MAX_POTENCY
}

export const getPointsValues = ({
    pentagonSize, spicy, dry, sweet, bitter, sour
}: GetPointsValuesParams) => [
    getPointValue(spicy + MIN_VISUAL_STAT_POINT_VALUE, pentagonSize),
    getPointValue(dry + MIN_VISUAL_STAT_POINT_VALUE, pentagonSize),
    getPointValue(sweet + MIN_VISUAL_STAT_POINT_VALUE, pentagonSize),
    getPointValue(bitter + MIN_VISUAL_STAT_POINT_VALUE, pentagonSize),
    getPointValue(sour + MIN_VISUAL_STAT_POINT_VALUE, pentagonSize)
]

const PENTAGON_POINTS_ANGLES = [270, 342, 54, 126, 198]

export const getPoints = (
    pointsValues: number[], pentagonSize: number,
) => {
    const center = pentagonSize / 2
    return PENTAGON_POINTS_ANGLES.map((angle, i) => {
        const rad = (Math.PI / 180) * angle
        const x = center + pointsValues[i] * Math.cos(rad)
        const y = center + pointsValues[i] * Math.sin(rad)
        return `${x},${y}`
    }).join(" ")
}
