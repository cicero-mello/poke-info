import { useEffect, useRef, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { HeaderProps } from "./types"
import * as S from "./styles"

export const Header: FC<HeaderProps> = ({
    startsRetracted
}) => {
    const [retract, setRetract] = useState(!!startsRetracted)
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const hiddenDescriptionRef = useRef<HTMLParagraphElement>(null)

    const handleClickRetract = async () => {
        if(!descriptionRef.current || !hiddenDescriptionRef.current) return

        const description = descriptionRef.current
        const descriptionHeightWhenIsOpen = hiddenDescriptionRef.current.offsetHeight + "px"
        description.style.height = description.offsetHeight + "px"
        void description.offsetHeight

        if(description.style.height === "0px"){
            description.style.height = descriptionHeightWhenIsOpen
            setTimeout(() => {
                description.style.height = "unset"
            }, 300)
            setRetract(false)
            return
        }

        description.style.height = "0px"
        setRetract(true)
    }

    useEffect(() => {
        const description = descriptionRef.current
        if(retract && description){
            description.style.height = "0px"
        }
    }, [])

    return (
        <S.Component $retract={retract}>
            <S.Title> Berries </S.Title>
            <S.Description ref={descriptionRef}>
                Berries are small fruits that can provide HP
                and status condition restoration, stat enhancement,
                and even damage negation when eaten by Pokémon.
            </S.Description>
            <S.HiddenDescription ref={hiddenDescriptionRef}>
                Berries are small fruits that can provide HP
                and status condition restoration, stat enhancement,
                and even damage negation when eaten by Pokémon.
            </S.HiddenDescription>
            <S.RetractButton onClick={handleClickRetract}/>
        </S.Component>
    )
}
