import Settings from "../pages/Settings"
import Style from "../pages/Style"

import {TbSettings2, TbLogin} from "react-icons/tb"

const SidebarRoutes = [
    {
        path: '/',
        label: 'Dashboard',
        component: Settings,
        icon: TbSettings2,
    },
    {
        path: '/style',
        label: "Style's",
        component: Style,
        icon: TbLogin,
    },
]

export default SidebarRoutes;