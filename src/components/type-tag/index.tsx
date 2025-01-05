import { FunctionComponent as FC } from "preact"
import { TypeTagProps } from "./types"
import * as S from "./styles"

export const TypeTag: FC<TypeTagProps> = ({
    pokemonType, size, cleanMode
}) => (
    <S.Component
        $pokemonType={pokemonType}
        $cleanMode={cleanMode}
        $size={size}
    >
        {pokemonType.toUpperCase()}
    </S.Component>
)
