import { useLayoutEffect, useMemo, useRef, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { MouseEvent } from "preact/compat"
import { SwitchProps } from "./types"
import { nanoid } from "nanoid"
import * as S from "./styles"

export const Switch: FC<SwitchProps> = ({
    label, id, onClick, onChange, defaultValue,
    nameLeft, nameRight, ...rest
}) => {
    const [nameLeftWidth, setNameLeftWidth] = useState("")
    const [nameRightWidth, setNameRightWidth] = useState("")

    const leftValueRef = useRef<HTMLSpanElement>(null)
    const rightValueRef = useRef<HTMLSpanElement>(null)

    const inputRef = useRef<HTMLInputElement>(null)
    const inputId = useMemo(() => (
        id ?? nanoid()
    ), [id])

    const inputChange = () => {
        if(!onChange || !inputRef?.current) return
        onChange(
            inputRef.current.checked ?
            nameRight : nameLeft
        )
    }

    const inputClick = (
        event: MouseEvent<HTMLInputElement>
    ) => {
        event.stopPropagation()
        if(onClick) onClick(event)
    }

    const sliderContainerClick = () => {
        if(inputRef.current) inputRef.current.click()
    }

    useLayoutEffect(() => {
        if(!leftValueRef.current) return
        setNameLeftWidth(
            leftValueRef.current.offsetWidth + "px"
        )
    }, [nameLeft])

    useLayoutEffect(() => {
        if(!rightValueRef.current) return
        setNameRightWidth(
            rightValueRef.current.offsetWidth + "px"
        )
    }, [nameRight])

    return (
        <S.Component
            $nameLeftWidth={nameLeftWidth}
            $nameRightWidth={nameRightWidth}
        >
            {label &&
                <S.Label
                    children={label}
                    htmlFor={inputId}
                />
            }
            <S.SliderContainer onClick={sliderContainerClick}>
                <S.SliderValue
                    children={nameLeft}
                    ref={leftValueRef}
                />
                <S.SliderValue
                    children={nameRight}
                    ref={rightValueRef}
                />
                <S.Slider />
            </S.SliderContainer>
            <S.Input
                id={inputId}
                type="checkbox"
                ref={inputRef}
                onClick={inputClick}
                onChange={inputChange}
                defaultChecked={defaultValue === nameRight}
                {...rest}
            />
        </S.Component>
    )
}
