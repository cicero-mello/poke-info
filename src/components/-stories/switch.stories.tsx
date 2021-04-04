import { Story, Meta } from "@storybook/react"
import * as Component from "../buttons"

export default {
    title: 'Components/Buttons/Switch',
    component: Component.Switch,
} as Meta

export const Switch: Story = () => <Component.Switch />
