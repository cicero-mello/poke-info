import { StyledAnchor, StyledButton } from "./styles"
import { useNavigation } from "@hooks"
import { useRef } from "preact/hooks"
import { ButtonProps } from "./types"
import { FC } from "preact/compat"

export const Button: FC<ButtonProps> = ({
    theme, emphasis, navigate: navigateProps,
    onClick, ...rest
}) => {
    const { navigate } = useNavigation()
    const styledLinkRef = useRef<any>(null)

    if(!navigateProps) return (
        <StyledButton
            $theme={theme}
            $emphasis={emphasis}
            onClick={onClick}
            {...rest}
        />
    )

    const handleAnchorClick = (event: MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        navigate(
            navigateProps.path,
            navigateProps.transition
        )
        if(onClick) onClick(event as any)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.code === "Enter" || event.code === "Space"){
            event.preventDefault()
            styledLinkRef.current.click()
        }
    }

    return (
        <StyledAnchor
            {...rest}
            $theme={theme}
            $emphasis={emphasis}
            ref={styledLinkRef}
            onClick={handleAnchorClick}
            onKeyDown={handleKeyDown}
            href={navigateProps.path}
        />
    )
}
