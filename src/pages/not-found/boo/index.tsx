import { useEffect, useState } from "preact/hooks"
import * as S from "./styles"

export const Boo = () => {
    const [showNoise, setShowNoise] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowNoise(true)
        }, 10600)
    }, [])

    return (
        <S.Component>
            <S.Background />
            <S.Ghost src="/img/ghost.webp" />
            {showNoise &&
                <S.Noise>
                    <svg>
                        <filter id="noise">
                            <feTurbulence>
                                <animate
                                    dur="50ms"
                                    attributeName="baseFrequency"
                                    values="0.9 0.9;0.8 0.8; 0.9 0.9"
                                    repeatCount="indefinite"
                                ></animate>
                            </feTurbulence>
                        </filter>
                    </svg>
                </S.Noise>

            }
        </S.Component>
    )
}
