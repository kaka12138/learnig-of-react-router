import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { 
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  type RouteObject,
  type unstable_DataStrategyFunction,
} from "react-router-dom"

import Root, { loader as rootLoader, ErrorCom as RootErrorCom } from "./routes/root.tsx"
import Team, { loader as teamLoader, action as teamAction } from './routes/team.tsx'
import ActionPage, { action as actionAction } from './routes/action-page.tsx'
import LoaderPage, { loader as loaderPageLoader, ErrorCom as LoaderPageErrorCom } from './routes/loader-page.tsx'
import IndexRoute, { loader as indexRouteLoader } from './routes/index-route.tsx'
import ComsNav from './routes/coms-nav.tsx'
import AwaitCom, { loader as awaitComLoader } from './routes/coms/await-com.tsx'
import FormCom, { loader as formComLoader, action as formComAction } from './routes/coms/form-com.tsx'
// 通过unstable_dataStrategy使用日志功能
const Logger: unstable_DataStrategyFunction = ({request, matches}) => {
  return Promise.all(
    matches.map(async (match) => {
      console.log(`Processing route: ${match.route.id}`)
      // Don't override anything - just resolve route.lazy + call loader
      let res = await match.resolve()
      console.log(`done processing route: ${match.route.id}`)
      return res
    })
  )
}

const ErrorCom = () => {
  return <div>ErrorBoundary</div>
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root/>,
    loader: rootLoader,
    shouldRevalidate: ({ nextUrl }) => {
      // 只有访问home才会重新执行首页的loader，其他页面时都使用loader缓存的数据
      return nextUrl.pathname === "/"
    },
    errorElement: <RootErrorCom/>,
    // ErrorBoundary: ErrorCom,
    children: [
      {
        index: true,
        element: <IndexRoute/>,
        loader: indexRouteLoader
      },
      {
        path: 'team/:id',
        loader: teamLoader,
        action: teamAction,
        element: <Team />
      },
      {
        path: 'loader-page/:id',
        loader: loaderPageLoader,
        element: <LoaderPage />,
        errorElement: <LoaderPageErrorCom/>
      },
      {
        path: 'action-page',
        element: <ActionPage/>,
        action: actionAction
      },
      {
        path: "lazy-route-page",
        lazy: () => import("./routes/lazy-route-page.tsx")
      },
      {
        path: "coms-nav",
        element: <ComsNav/>,
        children: [
          {
            path: "await-com",
            element: <AwaitCom/>,
            loader: awaitComLoader
          },
          {
            path: "form-com",
            element: <FormCom/>,
            loader: formComLoader,
            action: formComAction
          }
        ]
      }
    ],
  }
]
/**
  interface DOMRouterOpts {
      basename?: string;
      future?: Partial<Omit<RouterFutureConfig, "v7_prependBasename">>;
      hydrationData?: HydrationState;
      unstable_dataStrategy?: unstable_DataStrategyFunction;
      window?: Window;
  }
 */
const options = {
  // basename: '/app', // 用于无法将App部署在根目录的场景
  // 可以使用未来版本的功能
  future: {
    v7_normalizeFormMethod: true, // 启用v7版本的normalizeFormMethod功能
  },
  // when router get data by loader, it can work
  unstable_dataStrategy(args: any) {
    return Logger(args)
  }
}

// history
const router = createBrowserRouter(routes, options)
// hash
// const hashRouter = createHashRouter(routes, options)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} fallbackElement={<div>global loading...</div>}/>
  // <RouterProvider router={hashRouter} />
)
