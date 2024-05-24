import { Outlet } from "react-router-dom"
import NavItem from "../components/NavItem"
export default function ComsNav() {
  return <div className="coms-nav">
    <p style={{ textAlign: "center" }}>内置组件</p>
    <ul className="coms-nav-list">
      <NavItem to="await-com">Await Com</NavItem>
      <NavItem to="form-com">form Com</NavItem>
      <NavItem to="link-com">link Com</NavItem>
    </ul>
    <div className="com-area">
      <Outlet />
    </div>
  </div>
}
