import { InputHTMLAttributes } from "preact/compat"

export interface FavoriteCheckboxProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "ref" | "type"
>{
    onChange?: (checked: boolean) => void | Promise<void>
    label?: string
}
