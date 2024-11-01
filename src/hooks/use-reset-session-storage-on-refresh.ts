import { useLayoutEffect } from "preact/hooks"

export const useResetSessionStorageOnRefresh = () => {
    useLayoutEffect(() => {
        if(!sessionStorage.getItem("first-load")){
            sessionStorage.setItem("first-load", "true")
            return
        }
        sessionStorage.clear()
        sessionStorage.setItem("first-load", "true")
    })
}
