export interface FooterProps {
    berryId: number
    changeBerry: (
        newBerryId: number,
        animationDirection: "left" | "right" | "bottom"
    ) => void | Promise<void>
}
