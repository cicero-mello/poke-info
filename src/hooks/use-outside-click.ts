import { RefObject } from "preact"
import { useCallback, useEffect } from "preact/hooks"

/**
 * Call a function when user clicks anything that is outside
 * a specific element.
 *
 * @param targetRefElement - RefObject of the especific element
 * @param onOutsideFocus - Function called when user clicks some element outside
 * @param disabled - Optional flag do block the function more easily
 */
export const useOutsideClick = (
    ref: RefObject<any>,
    callback: () => void,
    disabled?: boolean
) => {
    const onClickOutside = useCallback((event: MouseEvent) => {
        if(!ref?.current) return
        if(!ref.current.contains(event.target) && !disabled) callback()
    }, [ref, callback])

    useEffect(() => {
        document.addEventListener("mousedown", onClickOutside)

        return () => (
            document.removeEventListener("mousedown", onClickOutside)
        )
    }, [ref, callback])
}
