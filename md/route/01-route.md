### 概述
  - 1. 将URL segments与组件，数据加载和数据更改关联
  - 2. 使用风格
    - 配置对象
    - JSX结合createRoutesFromElements使用
  - 示例
    ```jsx
    const router = createBrowserRouter([
      {
        // 要渲染的组件/元素
        element: <Team />,

        // 匹配的路径及segment
        path: "teams/:teamId",

        // 在渲染之前的数据加载
        loader: async ({ request, params }) => {
          return fetch(
            `/fake/api/teams/${params.teamId}.json`,
            { signal: request.signal }
          );
        },

        // 当发生数据提交时，执行此方法
        action: async ({ request }) => {
          return updateFakeTeam(await request.formData());
        },

        // 渲染错误时显示的组件/元素
        errorElement: <ErrorBoundary />,
      },
    ]);
    ```

### 类型声明
  ```ts
  interface RouteObject {
    path?: string;
    index?: boolean;
    children?: React.ReactNode;
    caseSensitive?: boolean;
    id?: string;
    loader?: LoaderFunction;
    action?: ActionFunction;
    element?: React.ReactNode | null;
    hydrateFallbackElement?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
    Component?: React.ComponentType | null;
    HydrateFallback?: React.ComponentType | null;
    ErrorBoundary?: React.ComponentType | null;
    handle?: RouteObject["handle"];
    shouldRevalidate?: ShouldRevalidateFunction;
    lazy?: LazyRouteFunction<RouteObject>;
  }
  ```

### path
  - 1. 路径模式，用于匹配URL
  - 2. dynamic segments
    - /teams/:teamId
    - 当存在:时，为dynamic segment, 匹配到segment将作为params传递给router APIs(loader和action中都可以获取，组件中使用useParams获取)
  - 3. optional segments
    - /:lang?/categories(动态可选segment)
    - /project/task?/:taskId(静态可选segment)
    - 当存在?时，为optional segment, 匹配到segment将作为params传递给router APIs(loader和action中都可以获取，组件中使用useParams获取)
  - 4. star segments
    - 当path pattern中存在*时，表示匹配任意内容, 也算是通过params传递
    - /files/*
      - /files
      - /files/one
      - /files/one/two

### Layout Routes --- 布局路由
  - 1. 没有path，不用于url匹配，用于提取子路由间的公共内容

### Index Routes --- 索引路由
  - 1. 没有path, 用于渲染默认的子路由(在父路由的Outlet中)

### caseSensitive
  - 1. 是否匹配大小写

### loader
  - 1. 在路由渲染之间调用，用于获取数据
  - 2. 将数据提供给element渲染,element中使用useLoaderData获取数据

### action
  - 1. 当提交的内容(Form, fetcher, submission)被发送到路由时调用

### elememt/Component
  - 1. 路由匹配成功时，渲染的元素或者组件
  - 2. 区别：想使用React元素时选择element，想使组件时(Component)，直接传递组件名称

### errorElement/ErrorBoundary
  - 1. 当路由在渲染，loader, 或者action中出现错误时，渲染的元素或者组件
  - 2. 区别：想使用React元素时选择errorElement，想使组件时(ErrorBoundary)，直接传递组件名称

### hydrateFallbackElement/HydrateFallback
  - 1. 服务端渲染相关

### handle
  - 1. 自定义的路由匹配函数，用于自定义匹配逻辑/数据

### lazy
  - 1. 延迟加载路由，用于按需加载路由, 基于路由进行代码分割
  ```jsx
    let routes = createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="a" lazy={() => import("./a")} />
        <Route path="b" lazy={() => import("./b")} />
      </Route>
    );
  ```
