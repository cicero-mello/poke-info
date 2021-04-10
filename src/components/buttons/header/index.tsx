import { FunctionComponent, useState, useEffect } from "react"
import { HeaderButtonProps } from "./interfaces"
import * as S from "./styles"

export const HeaderButton: FunctionComponent <HeaderButtonProps> = ({
    text, activated, ...rest
}) => {

    const [activatedState, setActivatedState] = useState(activated)

    useEffect(() => {
        setActivatedState(activated)
    },[activated])

    return (
        <S.Component
            {...rest}
            text={text}
            activated={activatedState}
        >
            {text ?? rest.children}
            <S.Underline activated={activatedState} />
        </S.Component>
    )
}

HeaderButton.defaultProps = {
    activated: false
}
