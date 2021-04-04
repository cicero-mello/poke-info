import { HomeButtonComponent } from "./home"
import { MiniHeaderButtonComponent } from "./mini-header"
import { HeaderButtonComponent, HeaderButtonUnderline } from "./header"
import { MiniMenuButtonComponent, MiniMenuButtonUnderline } from "./mini-menu"

export const componentStylePerTheme = new Map ([
    ["HOME", HomeButtonComponent],
    ["HEADER", HeaderButtonComponent],
    ["MINI_HEADER", MiniHeaderButtonComponent],
    ["MINI_MENU", MiniMenuButtonComponent]
])

export const underlineStylePerTheme = new Map ([
    ["HEADER", HeaderButtonUnderline],
    ["MINI_MENU", MiniMenuButtonUnderline]
])
