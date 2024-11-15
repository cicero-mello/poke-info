import { Button } from "@components/button"
import * as S from "./styles"

const description1 = "A strange seed was planted on its back at birth."
const description2 = "The plant sprouts and grows with this POKéMON."

export const PokemonMoreInfo = () => {

    return (
        <S.Component>
            <S.Description>
                {description1} <br />
                {description2}
            </S.Description>

            <S.LineInfo $title="Abilities">
                <Button children="Overgrow" />,&nbsp;
                <Button children="Chlorophyll" />
            </S.LineInfo>

            <S.Proportions>
                <S.LineInfo
                    $title="Weight"
                    children="6.9 kg"
                />
                <S.LineInfo
                    $title="Height"
                    children="0.7 m"
                />
            </S.Proportions>

            <S.LineInfo
                $title="Genera"
                children="Seed Pokémon asdas dasd asd"
            />

            <S.LineInfo
                $title="Shape"
                children="Quadruped"
            />

            <S.LineInfo
                $title="Habitat"
                children="Grassland"
            />

            <S.LineInfo
                $title="Egg Groups"
                children="Plant, Monster"
            />
        </S.Component>
    )
}
