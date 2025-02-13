import { FunctionComponent as FC } from "preact"
import { TabViewerProps } from "./types"
import { useState } from "preact/hooks"
import { Button } from "@components"
import * as S from "./styles"

export const TabViewer: FC<TabViewerProps> = ({
    tabNames, tabPanels, pokemonType
}) => {
    const [currentTabPanelIndex, setCurrentTabPanelIndex] = useState(0)

    return (
        <S.Component>
            <S.TabList>
                {tabNames.map((tabName, index) => (
                    <h2>
                        <Button
                            role="tab"
                            theme="linePokemon"
                            pokemonType={pokemonType}
                            children={tabName}
                            onClick={() => setCurrentTabPanelIndex(index)}
                            emphasis={currentTabPanelIndex === index}
                        />
                    </h2>
                ))}
            </S.TabList>
            <S.TabPanel>
                <S.Content>
                    {tabPanels[currentTabPanelIndex]}
                </S.Content>
            </S.TabPanel>
        </S.Component>
    )
}
