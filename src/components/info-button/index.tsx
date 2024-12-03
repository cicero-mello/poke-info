import { FunctionComponent as FC } from "preact"
import { InfoButtonProps } from "./types"
import { useNavigation } from "@hooks"
import { useRef } from "preact/hooks"
import * as S from "./styles"

export const InfoButton: FC<InfoButtonProps> = ({
    children, onClick, preventNavOnClick,
    navigate: navigateProps
}) => {
    if(!navigateProps){
        return (
            <S.StyledButton onClick={onClick} tabIndex={0}>
                <S.Text> {children} </S.Text>
                <S.HiddenText aria-hidden="true">
                    {children}
                </S.HiddenText>
            </S.StyledButton>
        )
    }

    const { navigate } = useNavigation()
    const styledLinkRef = useRef<any>(null)

    const handleAnchorClick = (event: MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        if(!preventNavOnClick){
            navigate(
                navigateProps.path,
                navigateProps.transition
            )
        }
        if(onClick) onClick(event as any)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.code === "Enter" || event.code === "Space"){
            event.preventDefault()
            styledLinkRef.current.click()
        }
    }

    return (
        <S.StyledAnchor
            ref={styledLinkRef}
            onClick={handleAnchorClick}
            href={navigateProps.path}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <S.Text> {children} </S.Text>
            <S.HiddenText aria-hidden="true">
                {children}
            </S.HiddenText>
        </S.StyledAnchor>
    )
}