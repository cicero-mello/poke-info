import { FunctionComponent as FC } from "preact"
import { MovesSectionProps } from "./types"
import { Move } from "./move"
import * as S from "./styles"

export const MovesSection: FC<MovesSectionProps> = ({
    versionName, moves
}) => {

    return (
        <S.Section>
            <S.Title> Moves in {versionName} Version</S.Title>
            {moves.map((move) => <Move {...move}/>)}
        </S.Section>
    )
}
