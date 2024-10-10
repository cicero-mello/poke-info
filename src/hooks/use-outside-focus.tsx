import { RefObject } from "preact"
import { useCallback, useEffect } from "preact/hooks"

/**
 * Call a function when user focus anything that is outside
 * a specific element.
 *
 * @param targetRefElement - RefObject of the especific element
 * @param onOutsideFocus - Function called when user focus a outside element
 * @param disabled - Optional flag do block the function more easily
 */
export const useOutsideFocus = (
    targetRefElement: RefObject<any>,
    onOutsideFocus: () => void,
    disabled?: boolean
) => {
    const handleFocusIn = useCallback((e: Event) => {
        if(
            targetRefElement.current &&
            !targetRefElement.current.contains(e.target) &&
            !disabled
        ){
            onOutsideFocus()
        }
    }, [targetRefElement, disabled, onOutsideFocus])

    useEffect(() => {
        document.addEventListener("focusin", handleFocusIn)

        return () => {
            document.removeEventListener("focusin", handleFocusIn)
        }
    }, [handleFocusIn])
}
