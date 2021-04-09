import { Story, Meta } from "@storybook/react"
import { HeaderButton, HeaderButtonProps} from "../"

export default {
    title: 'Components/Buttons/Header',
    component: HeaderButton
} as Meta
    
export const Header: Story <HeaderButtonProps> = (
    args
) => <HeaderButton {...args} />

Header.args = { text: "Click Me" }
