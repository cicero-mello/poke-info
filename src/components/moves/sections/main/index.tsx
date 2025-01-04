import { versionNamesPerVersionGroupId } from "@utils"
import { InfoButton } from "@components/info-button"
import { FunctionComponent as FC } from "preact"
import { MainSectionProps } from "./types"
import * as S from "./styles"

export const MainSection: FC<MainSectionProps> = ({
    versionGroupIds, setCurrentSection
}) => {
    const getVersionNames = (versionGroupId: number) => (
        versionNamesPerVersionGroupId.get(versionGroupId)!.flat()
    )

    return (
        <S.Section>
            <S.Title>
                Choose a game or expansion:
            </S.Title>
            <S.List>
                {versionGroupIds.map(versionGroupId => (
                    getVersionNames(versionGroupId).map(versionName => (
                        <S.ListItem>
                            <InfoButton
                                children={versionName}
                                onClick={() => {
                                    setCurrentSection({
                                        name: "moves",
                                        versionName: versionName,
                                        versionGroupId: versionGroupId
                                    })
                                }}
                            />
                        </S.ListItem>
                    ))
                ))}
            </S.List>
            <S.InfoBubble>
                Pokémons can have different moves depending
                on the version of the game.
                Additionally, the move itself may also be
                different between versions.
            </S.InfoBubble>
        </S.Section>
    )
}
