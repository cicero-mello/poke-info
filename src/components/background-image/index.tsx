import background from "@assets/background.png"
import { useState } from "preact/hooks"
import { Component } from "./styles"

export const BackgroundImage = () => {
    const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false)

    return (
        <Component
            src={background}
            onLoad={() => setIsBackgroundLoaded(true)}
            $isLoaded={isBackgroundLoaded}
        />
    )
}
