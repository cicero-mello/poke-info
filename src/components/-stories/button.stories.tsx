import { Story, Meta } from "@storybook/react"
import { Button as Component, ButtonProps } from "../buttons"
import "./-story.css"
import "src/index.css"

export default {
    title: 'Components/Buttons/Button',
    component: Component,
} as Meta

export const Button: Story <ButtonProps> = (
    args
) => <Component {...args} />

Button.args = {
    theme: "HEADER",
    text: "Click Here"
}
