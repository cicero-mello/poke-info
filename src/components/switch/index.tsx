import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { MouseEvent } from "preact/compat"
import { SwitchProps } from "./types"
import { debounce } from "@utils"
import { nanoid } from "nanoid"
import * as S from "./styles"

export const Switch: FC<SwitchProps> = ({
    label, id, onClick, onChange, defaultValue,
    nameLeft, nameRight, ...rest
}) => {
    const [nameLeftWidth, setNameLeftWidth] = useState("")
    const [nameRightWidth, setNameRightWidth] = useState("")
    const [withTransition, setWithTransition] = useState(false)

    const leftValueRef = useRef<HTMLSpanElement>(null)
    const rightValueRef = useRef<HTMLSpanElement>(null)

    const inputRef = useRef<HTMLInputElement>(null)
    const inputId = useMemo(() => (
        id ?? nanoid()
    ), [id])

    const inputChange = useCallback(() => {
        if(!onChange || !inputRef?.current) return
        onChange(
            inputRef.current.checked ?
            nameRight : nameLeft
        )
    }, [onChange])

    const debouncedInputChange = useCallback(
        debounce(inputChange, 220), [inputChange]
    )

    const inputClick = useCallback((
        event: MouseEvent<HTMLInputElement>
    ) => {
        event.stopPropagation()
        if(onClick) onClick(event)
    }, [onClick])

    const debouncedInputClick = useCallback(
        debounce(inputClick, 220), []
    )

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

    useEffect(() => {
        setTimeout(() => {
            setWithTransition(true)
        }, 20)
    }, [])

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
                <S.Slider $withTransition={withTransition} />
            </S.SliderContainer>
            <S.Input
                id={inputId}
                type="checkbox"
                ref={inputRef}
                onClick={debouncedInputClick}
                onChange={debouncedInputChange}
                defaultChecked={defaultValue === nameRight}
                {...rest}
            />
        </S.Component>
    )
}
