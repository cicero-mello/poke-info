export interface FooterProps {
    berryId: number
    changeBerry: (newBerryId: number) => void | Promise<void>
}
