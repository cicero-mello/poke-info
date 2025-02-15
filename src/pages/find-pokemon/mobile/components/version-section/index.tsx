import { FunctionComponent as FC } from "preact"
import { VersionSectionProps } from "./types"

export const VersionSection: FC<VersionSectionProps> = ({
    chosenVersionId,
    // setChosenVersionId
}) => {

    return (
        <p>Version Section {chosenVersionId}</p>
    )
}
