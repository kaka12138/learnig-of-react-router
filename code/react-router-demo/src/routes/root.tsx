import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom"
export async function loader() {
  // 延迟2秒加载
  await new Promise(resolve => setTimeout(resolve, 2000))
  return { msg: "success" }
}

export default function RootRouter() {
  const navgation = useNavigation()
  // @ts-expect-error
  const { msg } = useLoaderData()
  return <div className="root-container">
    <div className="root-title">Root Router --- { msg }</div>
    <div className="root-navs">
      <Link to="/team">team page</Link>
    </div>
    <div className="root-outlet">
      { navgation.state === "loading" ? <div>loading...</div> : <Outlet/> }
    </div>
  </div>
}
