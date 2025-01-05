import { TypeTag, DamageClassTag, InfoLine } from "@components"
import { FunctionComponent as FC } from "preact"
import { Move as MoveProps } from "../types"
import { MortarboardIco } from "@assets"
import * as S from "./styles"

export const Move: FC<MoveProps> = (props) => (
    <S.Component>
        <S.Header>
            <S.Title children={props.name} />
            <TypeTag pokemonType={props.type} size="small" cleanMode />
            <DamageClassTag damageClass={props.damageClass} />
        </S.Header>
        <S.Content>
            {props.description && (
                <S.Description>{props.description}</S.Description>
            )}
            {!!props.versionGroupIdAdditionalDescription && (
                <S.AdditionalDescription>
                    <b>Special feature of this game version:</b>
                    <br />{props.versionGroupIdAdditionalDescription}
                </S.AdditionalDescription>
            )}
            <S.LearnMethod>
                <MortarboardIco />
                <p>
                    {props.learnMethod.description + (
                        props.learnMethod.learnedAtLevel ?
                            ` (LvL ${props.learnMethod.learnedAtLevel})`
                            : ""
                    )}
                </p>
            </S.LearnMethod>
            <S.InfoTopics>
                <div>
                    <InfoLine title="Power">
                        {props.power ?? "-"}
                    </InfoLine>
                    <InfoLine title="Power Points">
                        {props.pp ?? "-"}
                    </InfoLine>
                </div>
                <div>
                    <InfoLine title="Accuracy">
                        {props.accuracy ? props.accuracy + "%" : "-"}
                    </InfoLine>
                    <InfoLine title="Target">
                        {props.moveTargetName ?? "-"}
                    </InfoLine>
                </div>
            </S.InfoTopics>
        </S.Content>
    </S.Component>
)
