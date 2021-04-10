import { Button } from "src/shared/interfaces"

export interface HeaderButtonProps
extends Omit<Button, "className"> {

    text?: string
    activated?: boolean
}
