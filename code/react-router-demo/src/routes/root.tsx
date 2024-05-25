import { ScrollRestoration, Outlet, useLoaderData, useRouteError, json, isRouteErrorResponse } from "react-router-dom"
import NavItem from "../components/NavItem"
export async function loader() {
  console.log("excute root loader")
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
  return<div className="root-container">
      <ScrollRestoration/>
      <div className="root-title">Root Router --- { msg }</div>
      <div className="root-navs">
        <NavItem to="/" pendingText="navgating...">home page</NavItem>
        <NavItem to="/team/1">team page</NavItem>
        <NavItem to="/loader-page/888?name=chenjie" >loader page demo</NavItem>
        <NavItem to="/action-page">action page demo</NavItem>
        <NavItem to="/lazy-route-page">lazy route page</NavItem>
        <NavItem to="/coms-nav">built-in components</NavItem>
      </div>
      <div className="root-outlet">
        {/* TODO:全局loading逻辑 */}
        {/* { key !== nextKey ? <div>loading...</div> : <Outlet/> } */}
        <Outlet />
      </div>
    </div>
}
