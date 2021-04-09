import { FunctionComponent, useState, useEffect } from "react"
import { ButtonOnClickEvent } from "src/shared"
import { HeaderButtonProps } from "./interfaces"
import * as S from "./styles"

export const HeaderButton: FunctionComponent <HeaderButtonProps> = ({
    text, activated, automaticActivation, ...rest
}) => {

    const [activatedState, setActivatedState] = useState(activated)

    const handleClick = (event: ButtonOnClickEvent) => {
        if(rest.onClick) rest.onClick(event)
        if(automaticActivation) setActivatedState(true)
    }

    useEffect(() => {
        setActivatedState(activated)
    },[activated])

    return (
        <S.Component
            {...rest}
            text={text}
            onClick={handleClick}
            activated={activatedState}
        >
            {text ?? rest.children}
            <S.Underline activated={activatedState} />
        </S.Component>
    )
}

HeaderButton.defaultProps = {
    activated: false,
    automaticActivation: true
}
