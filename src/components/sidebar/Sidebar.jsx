import { AttachMoneyOutlined, ChatBubbleOutlineOutlined, DynamicFeedOutlined, Equalizer, LineStyle, MailOutline, PermIdentityOutlined, Report, StorefrontOutlined, Timeline, TrendingUp, WorkOutlineOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboar</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analitycs
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentityOutlined className="sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <StorefrontOutlined className="sidebarIcon"/>
                            Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoneyOutlined className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <Equalizer className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedOutlined className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineOutlined className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutlineOutlined className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analitycs
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
          
        </div>

    </div>
  )
}
