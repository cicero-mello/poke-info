import { useEffect, useRef, useState } from "preact/hooks"
import { useDocumentTitle } from "@hooks"
import { getObservation } from "./core"
import { Button } from "@components"
import { PATHS } from "@types"
import * as S from "./styles"
import { Boo } from "./boo"

export const NotFound = () => {
    useDocumentTitle("404")

    const [time, setTime] = useState(30)
    const booSoundRef = useRef<HTMLAudioElement>(null)
    const musicRef = useRef<HTMLAudioElement>(null)

    const decreaseTime = (time: number) => {
        if(time === -1) return
        setTimeout(() => {
            setTime(time - 1)
            decreaseTime(time - 1)
        }, 1000)
    }

    const handleYes = () => {
        document.body.style.pointerEvents = "none"

        if(!booSoundRef.current) return
        booSoundRef.current.volume = 0
        booSoundRef.current.play()

        setTimeout(() => {
            if(!booSoundRef.current) return
            booSoundRef.current.currentTime = 0
            booSoundRef.current.volume = 1
            booSoundRef.current.play()
            setTimeout(() => {
                setTime(-2)
            }, 100)
            setTimeout(() => {
                musicRef.current?.play()
                document.documentElement.requestFullscreen()
            }, 3000)
        }, 1000)
    }

    const handleNo = () => {
        setTime(30)
        decreaseTime(30)
    }

    useEffect(() => {
        decreaseTime(time)

        return () => {
            musicRef.current?.pause()
        }
    }, [])

    return (
        <S.Screen>
            {time >= 0 &&
                <S.Card>
                    <S.Title>This route doesn't exists</S.Title>
                    <S.WarningText>You have</S.WarningText>
                    <S.Time>{time}s</S.Time>
                    <S.WarningText>to
                        <Button
                            children="return"
                            navigate={{path: PATHS.HOME}}
                        />
                    </S.WarningText>
                    <S.ObservationText>
                        {getObservation(time)}
                    </S.ObservationText>
                </S.Card>
            }
            {time < 0 &&
                <S.Card>
                    <S.Title>Did you read the last warning?</S.Title>
                    <S.Buttons>
                        <Button
                            children="Yes"
                            onClick={handleYes}
                        />
                        <Button
                            children="No"
                            onClick={handleNo}
                        />
                    </S.Buttons>
                </S.Card>
            }
            {time === -2 && <Boo />}
            <S.Audio
                ref={booSoundRef}
                src={"/audio/boo.mp3"}
                preload="auto"
            />
            <S.Audio
                ref={musicRef}
                src={"/audio/music.mp3"}
                preload="auto"
                loop
            />
            <S.PreloadGhost
                src={"/img/ghost.webp"}
                preload="auto"
            />
        </S.Screen>
    )
}
