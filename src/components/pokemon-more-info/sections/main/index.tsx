import { FunctionComponent as FC } from "preact/compat"
import { InfoButton } from "@components/info-button"
import { InfoLine } from "@components/info-line"
import { MainSectionProps } from "./types"
import * as S from "./styles"

export const MainSection: FC<MainSectionProps> = ({
    data, setCurrentSection
}) => (
    <S.Section>
        <S.Description>
            {data.description}
        </S.Description>

        <InfoLine title="Abilities">
            {data.abilities.map((ability: any) => (
                <InfoButton
                    children={ability.name}
                    onClick={() => setCurrentSection({
                        name: "abilities",
                        abilityId: ability.id
                    })}
                />
            ))}
        </InfoLine>

        <S.Proportions>
            <InfoLine
                title="Weight"
                children={data.weight + "kg"}
            />
            <InfoLine
                title="Height"
                children={data.height + "m"}
            />
        </S.Proportions>

        <InfoLine
            title="Genera"
            children={data.genera}
        />

        <InfoLine
            title="Shape"
            children={data.shape}
        />

        <InfoLine
            title="Habitat"
            children={data.habitat}
        />

        <InfoLine
            title="Egg Groups"
            children={data.eggGroups}
        />
    </S.Section>
)