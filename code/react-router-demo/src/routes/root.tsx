import { Link, Outlet, useLoaderData } from "react-router-dom"
export async function loader() {
  // 延迟2秒加载
  await new Promise(resolve => setTimeout(resolve, 2000))
  return { msg: "success" }
}

export default function RootRouter() {
  // @ts-expect-error
  const { msg } = useLoaderData()
  return <div className="root-container">
    <div className="root-title">Root Router --- { msg }</div>
    <div className="root-navs">
      <Link to="/team/1" className="nav-item">team page</Link>
      <Link to="/loader-page" className="nav-item">loader page demo</Link>
      <Link to="/action-page" className="nav-item">action page demo</Link>
    </div>
    <div className="root-outlet">
      {/* TODO:全局loading逻辑 */}
      {/* { key !== nextKey ? <div>loading...</div> : <Outlet/> } */}
      <Outlet />
    </div>
  </div>
}
