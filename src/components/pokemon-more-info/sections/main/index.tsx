import { FunctionComponent as FC } from "preact/compat"
import { InfoButton } from "@components/info-button"
import { InfoLine } from "@components/info-line"
import { MainSectionProps } from "./types"
import * as S from "./styles"

export const MainSection: FC<MainSectionProps> = ({
    queryData, setCurrentSection
}) => (
    <S.Section>
        <S.Description>
            {queryData.description}
        </S.Description>

        <InfoLine title="Abilities">
            {queryData.abilities.map((ability) => (
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
                children={queryData.weight + "kg"}
            />
            <InfoLine
                title="Height"
                children={queryData.height + "m"}
            />
        </S.Proportions>

        <InfoLine
            title="Genera"
            children={queryData.genera}
        />

        <InfoLine
            title="Shape"
            children={queryData.shape}
        />

        <InfoLine
            title="Habitat"
            children={queryData.habitat}
        />

        <InfoLine
            title="Egg Groups"
            children={queryData.eggGroups}
        />
    </S.Section>
)
