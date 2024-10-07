import { HTMLAttributes } from "preact/compat"
import { RuleSet } from "styled-components"

export type ButtonTheme = "lineGray" | "lineWhite" | "boldWhite"

export interface ButtonProps extends Omit<
    HTMLAttributes<HTMLElement>,
    "className" | "onContextMenu" | "onKeyDown" | "ref"
>{
    theme?: ButtonTheme
    emphasis?: boolean
    navigate?: {
        path: string,
        transition?: boolean
    }
}

export interface StyledProps {
    $theme?: ButtonTheme
    $emphasis?: boolean
}

export type ThemeFunction = ($emphasis?: boolean) => RuleSet<object>
