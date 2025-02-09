import { StyledAnchor, StyledButton } from "./styles"
import { useNavigation } from "@hooks"
import { useRef } from "preact/hooks"
import { ButtonProps } from "./types"
import { FC } from "preact/compat"

export const Button: FC<ButtonProps> = ({
    theme, emphasis, pokemonType, navigate: navigateProps,
    preventNavOnClick, onClick, tabIndex, componentRef, ...rest
}) => {
    const { navigate } = useNavigation()
    const styledLinkRef = useRef<any>(null)

    if(!navigateProps) return (
        <StyledButton
            $theme={theme}
            $emphasis={emphasis}
            $pokemonType={pokemonType}
            onClick={onClick}
            tabIndex={tabIndex}
            ref={componentRef}
            {...rest}
        />
    )

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
        <StyledAnchor
            {...rest}
            $theme={theme}
            $emphasis={emphasis}
            $pokemonType={pokemonType}
            ref={styledLinkRef}
            onClick={handleAnchorClick}
            onKeyDown={handleKeyDown}
            href={navigateProps.path}
            tabIndex={tabIndex}
        />
    )
}
