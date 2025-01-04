import { FunctionComponent as FC } from "preact"
import { TypeTag } from "@components/type-tag"
import { Move as MoveProps } from "../types"
import * as S from "./styles"

export const Move: FC<MoveProps> = (props) => {

    return (
        <S.Component>
            <S.Header>
                <S.Title children={props.name} />
                <TypeTag pokemonType={props.type} />
            </S.Header>
        </S.Component>
    )
}
