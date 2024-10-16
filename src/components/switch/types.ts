import { InputHTMLAttributes } from "preact/compat"

export interface SwitchProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "ref" | "type" | "defaultChecked" | "default"
>{
    onChange?: (name: string) => void
    label?: string
    nameLeft: string
    nameRight: string
    defaultValue?: string
}
