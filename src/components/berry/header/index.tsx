import { FunctionComponent as FC } from "preact"
import { useRef, useState } from "preact/hooks"
import * as S from "./styles"

export const Header: FC = () => {
    const [retract, setRetract] = useState(false)
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const lastDescriptionHeight = useRef(0)

    const handleClickRetract = async () => {
        if(!descriptionRef.current) return

        descriptionRef.current.style.height = descriptionRef.current.offsetHeight + "px"
        const currentHeight = descriptionRef.current.offsetHeight

        descriptionRef.current.style.height = lastDescriptionHeight.current + "px"
        lastDescriptionHeight.current = currentHeight

        setRetract(state => !state)
        setTimeout(() => {
            if(!descriptionRef.current) return
            if(lastDescriptionHeight.current == 0) descriptionRef.current.style.height = "unset"
        }, 300)
    }

    return (
        <S.Component $retract={retract}>
            <S.Title> Berries </S.Title>
            <S.Description ref={descriptionRef}>
                Berries are small fruits that can provide HP
                and status condition restoration, stat enhancement,
                and even damage negation when eaten by Pokémon.
            </S.Description>
            <S.RetractButton onClick={handleClickRetract}/>
        </S.Component>
    )
}
