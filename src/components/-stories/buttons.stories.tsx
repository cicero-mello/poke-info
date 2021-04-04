import { Story, Meta } from "@storybook/react"
import * as Component from "../buttons"
import "./story.css"

export default { title: 'Components/Buttons' } as Meta
    
export const Button: Story = () => <Component.Button />
export const Check: Story = () => <Component.Check />
export const Switch: Story = () => <Component.Switch />
