import { AnimationClass } from "./types"

const animationClasses: AnimationClass[] = [
    "go-left",
    "come-from-right",
    "go-right",
    "come-from-left",
    "go-bottom",
    "come-from-bottom"
]

const removeOthersAnimationClasses = (
    desiredClass: AnimationClass, element: HTMLElement
) => {
    animationClasses.forEach((animationClass) => {
        if(animationClass != desiredClass){
            element.classList.remove(animationClass)
        }
    })
}

export const animateGoLeft = (
    element: HTMLElement | null
) => {
    if(!element) return
    removeOthersAnimationClasses("go-left", element)
    void element.offsetHeight
    element.classList.add("go-left")
    void element.offsetHeight
}

export const animateComeFromRight = (
    element: HTMLElement | null
) => {
    if(!element) return
    removeOthersAnimationClasses("come-from-right", element)
    void element.offsetHeight
    element.classList.add("come-from-right")
    void element.offsetHeight
}

export const animateGoRight = (
    element: HTMLElement | null
) => {
    if(!element) return
    removeOthersAnimationClasses("go-right", element)
    void element.offsetHeight
    element.classList.add("go-right")
    void element.offsetHeight
}

export const animateComeFromLeft = (
    element: HTMLElement | null
) => {
    if(!element) return
    removeOthersAnimationClasses("come-from-left", element)
    void element.offsetHeight
    element.classList.add("come-from-left")
    void element.offsetHeight
}

export const animateGoBottom = (
    element: HTMLElement | null
) => {
    if(!element) return
    removeOthersAnimationClasses("go-bottom", element)
    void element.offsetHeight
    element.classList.add("go-bottom")
    void element.offsetHeight
}

export const animateComeFromBottom = (
    element: HTMLElement | null
) => {
    if(!element) return
    removeOthersAnimationClasses("come-from-bottom", element)
    void element.offsetHeight
    element.classList.add("come-from-bottom")
    void element.offsetHeight
}
