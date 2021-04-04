import { Button } from "@interfaces"

export type ButtonTheme = "HEADER" | "MINI_HEADER" | "HOME" | "MINI_MENU"

export interface ButtonProps extends Omit<Button, "className"> {
    theme: ButtonTheme
    text?: string
}
