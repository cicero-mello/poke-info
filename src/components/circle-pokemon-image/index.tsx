import { CirclePokemonImageProps, CirclePokemonImageRef } from "./types"
import { useImperativeHandle, useLayoutEffect, useRef } from "preact/hooks"
import { forwardRef } from "preact/compat"
import * as S from "./styles"

export const CirclePokemonImage = forwardRef<CirclePokemonImageRef, CirclePokemonImageProps>(({
    url, componentRef, pokemonName, type
}, ref ) => {
    const imgRef = useRef<HTMLImageElement>(null)
    const promiseRef = useRef<Promise<void> | null>(null)

    const loadPromise = () => {
        if(!promiseRef.current){
            promiseRef.current = new Promise<void>((resolve, reject) => {
                if (!imgRef.current) return reject()
                const img = imgRef.current
                if (img.complete && img.naturalWidth > 0) return resolve()
                img.onload = () => resolve()
                img.onerror = () => reject()
            })
        }
        return promiseRef.current
    }

    useLayoutEffect(() => {
        promiseRef.current = null
    }, [url])

    useImperativeHandle(ref, () => ({
        loaded: loadPromise
    }))

    return (
        <S.Component ref={componentRef}>
            {pokemonName && <S.Name>{pokemonName}</S.Name>}
            <S.ImageWrapper>
                <S.BackgroundCircle $type={type} />
                <S.Image src={url} alt="Pokémon Image" ref={imgRef}/>
            </S.ImageWrapper>
        </S.Component>
    )
})
