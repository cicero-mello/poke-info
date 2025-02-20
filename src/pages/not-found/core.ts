export const observations: string[] = [
    "(and everything will be fine)",
    "(why are you still waiting??)",
    "(...)"
]

export const getObservation = (time: number) => {
    if(time > 15 && time <= 25) return observations[0]
    if(time > 5 && time <= 15) return observations[1]
    if(time > 2 && time <= 9) return observations[2]
    return ""
}
