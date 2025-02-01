import { FunctionComponent as FC } from "preact"
import { BackgroundPentagonProps } from "./types"
import { useEffect, useRef } from "preact/hooks"
import * as S from "./styles"

export const BackgroundPentagon: FC<BackgroundPentagonProps> = ({
    pentagonSize
}) => {
    const pentagonRef = useRef<SVGSVGElement>(null)

    const createPentagon = () => {
        if (!pentagonRef.current) return

        pentagonRef.current.style.width = `${pentagonSize}px`
        pentagonRef.current.style.height = `${pentagonSize}px`

        const pentagonDots = {
            top: ` ${pentagonSize / 2}, 0`,
            left: ` 0, ${pentagonSize / 2.757575}`,
            right: ` ${pentagonSize}, ${pentagonSize / 2.757575}`,
            center: ` ${pentagonSize / 2}, ${pentagonSize / 1.905759}`,
            bottomRight: ` ${pentagonSize / 1.2402044}, ${pentagonSize / 1.0550724637}`,
            bottomLeft: ` ${pentagonSize / 5.2374100719}, ${pentagonSize / 1.0550724637}`
        }

        const trianglesDots = [
            pentagonDots.center + pentagonDots.top + pentagonDots.right,
            pentagonDots.center + pentagonDots.right + pentagonDots.bottomRight,
            pentagonDots.center + pentagonDots.bottomRight + pentagonDots.bottomLeft,
            pentagonDots.center + pentagonDots.bottomLeft + pentagonDots.left,
            pentagonDots.center + pentagonDots.left + pentagonDots.top
        ]

        const triangleElements = Array.from(
            document.getElementsByClassName("triangle")
        )

        triangleElements.forEach((triangleElement, i) => {
            triangleElement.setAttribute("points", trianglesDots[i])
        })
    }

    useEffect(() => {
        createPentagon()
    }, [pentagonSize])

    return (
        <S.Svg ref={pentagonRef}>
            <polygon class="triangle" />
            <polygon class="triangle" />
            <polygon class="triangle" />
            <polygon class="triangle" />
            <polygon class="triangle" />
        </S.Svg>
    )
}
