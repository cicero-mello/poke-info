import { useLayoutEffect, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { ItemContentProps } from "./types"
import { InfoLine } from "@components"
import * as S from "./styles"
import * as api from "@api"

export const ItemContent: FC<ItemContentProps> = ({
    itemId, componentRef
}) => {
    const [imageIsLoaded, setImageIsLoaded] = useState(false)

    const { data } = useQuery({
        queryKey: ["getItem", itemId],
        queryFn: () => api.getItem({ idOrName: itemId })
    })

    useLayoutEffect(() => {
        setImageIsLoaded(false)
    }, [itemId])

    return (
        <S.Component ref={componentRef} className={"come-from-bottom"}>
            <S.Descriptions>
                <S.ShortEffectWrapper $imageIsLoaded={imageIsLoaded}>
                    <img
                        src={data?.spriteUrl}
                        alt="Berry image"
                        onLoad={() => setImageIsLoaded(true)}
                    />
                    <p>{data?.shortEffect}</p>
                </S.ShortEffectWrapper>
                <S.Description>
                    {data?.description}
                </S.Description>
            </S.Descriptions>
            <S.List>
                {data?.category &&
                    <InfoLine
                        title="Category"
                        children={data?.category}
                        asListItem
                    />
                }
                {data?.cost &&
                    <InfoLine
                        title="Cost"
                        children={data?.cost}
                        asListItem
                    />
                }
                {data?.flingPower &&
                    <InfoLine
                        title="Fling Power"
                        children={data?.flingPower}
                        asListItem
                    />
                }
                {data?.flingEffect &&
                    <InfoLine
                        title="Fling Effect"
                        children={data?.flingEffect}
                        asListItem
                    />
                }
                {data?.isHoldableActive &&
                   <InfoLine
                        title="Holdable Active"
                        children={"Yes"}
                        asListItem
                    />
                }
            </S.List>
        </S.Component>
    )
}
