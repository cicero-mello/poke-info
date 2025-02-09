import { AnimationClass } from "./types"

const animationClasses: AnimationClass[] = [
    "go-left",
    "come-from-left",
    "spin-zoom-in",
    "spin-zoom-out",
    "fade-out",
    "fade-in"
]

const removeOthersAnimationClasses = (
    desiredClass: AnimationClass, element: HTMLElement
) => {
    if(!element.classList) return

    animationClasses.forEach((animationClass) => {
        if(animationClass != desiredClass){
            element.classList.remove(animationClass)
        }
    })
}

export const applyAnimation = (
    element: HTMLElement | undefined | null,
    animationClass: AnimationClass
) => {
    if(!element) return
    removeOthersAnimationClasses(animationClass, element)
    void element.offsetHeight
    element.classList.add(animationClass)
    void element.offsetHeight
}
