import { FunctionComponent as FC } from "preact"
import { FavoriteCheckboxProps } from "./types"
import { useMemo, useRef } from "preact/hooks"
import { CheckboxPokeballIco } from "@assets"
import { MouseEvent } from "preact/compat"
import { nanoid } from "nanoid"
import * as S from "./styles"

export const FavoriteCheckbox: FC<FavoriteCheckboxProps> = ({
    onChange, onClick, label, id, ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const inputId = useMemo(() => (
        id ?? nanoid()
    ), [id])

    const pokeballClick = () => {
        if(inputRef.current) inputRef.current.click()
    }

    const inputChange = () => {
        if(onChange && inputRef?.current){
            onChange(inputRef.current.checked)
        }
    }

    const inputClick = (e: MouseEvent<HTMLInputElement>) => {
        e.stopPropagation()
        if(onClick) onClick(e)
    }

    return (
        <S.Component>
            {label &&
                <S.Label
                    children={label}
                    htmlFor={inputId}
                />
            }
            <S.Input
                id={inputId}
                type="checkbox"
                ref={inputRef}
                onClick={inputClick}
                onChange={inputChange}
                {...rest}
            />
            <CheckboxPokeballIco onClick={pokeballClick}/>
        </S.Component>
    )
}
