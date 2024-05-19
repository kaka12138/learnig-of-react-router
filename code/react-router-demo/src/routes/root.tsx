import { Link, Outlet, useLoaderData, useRouteError, json, isRouteErrorResponse } from "react-router-dom"
export async function loader() {
  // 延迟2秒加载
  const code =await new Promise(resolve => setTimeout(() => {
    // resolve(404)
    // resolve(10010)
    resolve(200)
  }, 2000))
  if(code === 404) {
    throw json({ msg: "test not found 404" }, { status: 404 })
  } else if(code === 10010) {
    throw new Error("test error 10010")
  }
  return { msg: "success" }
}

export function ErrorCom() {
  const error = useRouteError()
  if(isRouteErrorResponse(error)&&error.status === 404) {
    return <div>not found 404</div>
  }
  return <div>someting worng in root router</div>
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
      <Link to="/lazy-route-page" className="nav-item">lazy route page</Link>
    </div>
    <div className="root-outlet">
      {/* TODO:全局loading逻辑 */}
      {/* { key !== nextKey ? <div>loading...</div> : <Outlet/> } */}
      <Outlet />
    </div>
  </div>
}
