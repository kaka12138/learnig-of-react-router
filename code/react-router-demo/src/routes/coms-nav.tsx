import { Link, Outlet } from "react-router-dom"
export default function ComsNav() {
  return <div className="coms-nav">
    <p style={{ textAlign: "center" }}>内置组件</p>
    <ul className="coms-nav-list">
      <Link className="coms-nav-item" to="await-com">Await Com</Link>
    </ul>
    <div className="com-area">
      <Outlet />
    </div>
  </div>
}
