import { GithubIco, LinkedInIco } from "@assets"
import * as S from "./styles"

export const About = () => (
    <S.Screen>
        <S.Content>
            <S.Text>
                <b><a
                    href="https://poke-info.vercel.app"
                    target="_blank"
                    children="PokéInfo"
                /></b>
                &nbsp;is a <i>front-end only</i> project, created with&nbsp;
                <b><a
                    href={"https://preactjs.com"}
                    target="_blank"
                    children="Preact"
                /></b>,
                which consumes data from the&nbsp;
                <b><a
                    href={"https://pokeapi.co/"}
                    target="_blank"
                    children={"PokéApi"}
                /></b>,
                using&nbsp;
                <b><a
                    href={"https://tanstack.com/query/latest"}
                    target="_blank"
                    children={"TanStack Query"}
                /></b>.
                <br /><br />
                You can find more details in the&nbsp;
                <a
                    href={"https://github.com/cicero-mello/poke-info"}
                    target="_blank"
                    children="README"
                />.
            </S.Text>
            <S.Icons>
                <a
                    href={"https://github.com/cicero-mello"}
                    target="_blank"
                    children={<GithubIco />}
                />
                <a
                    href={"https://www.linkedin.com/in/cicero-mello"}
                    target="_blank"
                    children={<LinkedInIco />}
                />
            </S.Icons>
        </S.Content>
    </S.Screen>
)
