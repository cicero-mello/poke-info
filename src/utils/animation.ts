export interface AnimationsParams<T extends string> {
    animationClasses: T[]
    desiredAnimationClass: T
    element: HTMLElement | null
}

export const removeOthersAnimationClasses = <T extends string>({
    animationClasses,
    desiredAnimationClass,
    element
}: AnimationsParams<T>) => {
    if(!element) return

    animationClasses.forEach((animationClass) => {
        if (animationClass !== desiredAnimationClass) {
            element.classList.remove(animationClass)
        }
    })
}

export const applyAnimation = <T extends string>({
    element,
    animationClasses,
    desiredAnimationClass
}: AnimationsParams<T>) => {
    if(!element) return

    removeOthersAnimationClasses({
        animationClasses,
        desiredAnimationClass,
        element
    })
    void element.offsetHeight
    element.classList.add(desiredAnimationClass)
    void element.offsetHeight
}
