import { Button } from "src/shared/interfaces"

export interface HomeButtonProps extends Omit<Button, "className"> {
    text?: string
}
