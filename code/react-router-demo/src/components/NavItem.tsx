import { NavLink } from "react-router-dom"
// 写法2
interface INavItemProps {
  to: string
  children: React.ReactNode
}

export default function NavItem({children, to, pendingText}: { children: React.ReactNode, to: string, pendingText?: string }) {
  return <NavLink 
    to={to} 
    className={({ isActive, isPending}) => isPending? "pending" : isActive ? "active" : ""}
    >{pendingText? ({isPending}) => isPending ? pendingText: children : children}
  </NavLink>
}
