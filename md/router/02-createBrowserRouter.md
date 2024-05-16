### createBrowserRouter
  - 1. 使用DOM API history去更新URL和管理history stack
  - 2. 支持 v6.4 data API，如加载器、操作、获取器等

### 类型定义
```ts
  function createBrowserRouter(
    routes: RouteObject[], // route list
    opts?: {
      basename?: string; // 用于无法将App部署在根目录的场景
      future?: FutureConfig; // 可以使用未来版本的功能
      hydrationData?: HydrationState; // 用于服务器渲染
      // 当路由通过loader获取数据时，才会调用
      unstable_dataStrategy?: unstable_DataStrategyFunction, // 这个API重写了react router内部loader和action的执行 让开发者可以自定义数据获取/操作策略(loader, action),实现Logger, Middleware等功能
      window?: Window;
    }
  ): RemixRouter;

  // route object
  [
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "events/:id",
          element: <Event />,
          loader: eventLoader,
        },
      ],
    },
  ]
```
