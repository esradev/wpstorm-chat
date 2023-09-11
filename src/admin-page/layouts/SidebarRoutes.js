import Dashboard from "../pages/Dashboard"
import Settings from "../pages/Settings"
import Styles from "../pages/Styles"
import LiveUsers from "../pages/LiveUsers"
import Operators from "../pages/Operators"
import Conversations from "../pages/Conversations"

import {
    HiOutlineSquares2X2,
    HiOutlineCog6Tooth,
    HiOutlinePaintBrush,
    HiOutlineUserGroup,
    HiOutlineIdentification,
    HiOutlineChatBubbleLeftEllipsis
} from "react-icons/hi2"

const SidebarRoutes = [
    {
        path: '/',
        label: 'Dashboard',
        component: Dashboard,
        icon: HiOutlineSquares2X2,
    },
    {
        path: '/settings',
        label: 'Settings',
        component: Settings,
        icon: HiOutlineCog6Tooth,
    },
    {
        path: '/styles',
        label: "Style's",
        component: Styles,
        icon: HiOutlinePaintBrush,
    },
    {
        path: '/live-users',
        label: "Live User's",
        component: LiveUsers,
        icon: HiOutlineUserGroup,
    },
    {
        path: '/Operators',
        label: "Operator's",
        component: Operators,
        icon: HiOutlineIdentification,
    },
    {
        path: '/Conversations',
        label: "Conversations",
        component: Conversations,
        icon: HiOutlineChatBubbleLeftEllipsis,
    },
]

export default SidebarRoutes;