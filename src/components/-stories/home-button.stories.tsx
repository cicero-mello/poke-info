import { Story, Meta } from "@storybook/react"
import { HomeButton, HomeButtonProps } from "../buttons"
import "./-story.css"
import "src/index.css"

export default {
    title: "Components/Buttons/Home",
    component: HomeButton,
    argTypes: {
        text: {
            name: "Button Text",
            defaultValue: "Click Here",
            control: { type: "text" },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "undefined" },
            },
        }
    }
} as Meta

export const Home: Story <HomeButtonProps> = (
    args
) => <HomeButton {...args} />
