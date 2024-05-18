### errorElement
  - 1. 在路由或者及其子路由中, 当异常在loader, action, 或者组件渲染中被抛出时，就会渲染Route中的errorElement选项
  - 2. 并且可以使用useRouteError hook来获取当前路由的异常

### errorElement与ErrorBoundary的区别
  - 1. 在渲染方面, 提供给errorElement的是React element, 而ErrorBoundary则是React component

### 错误冒泡
  - 1. 当一个路由没有提供errorElemnt时，错误将通过父路由向上传递
  - 2. 可以将错误放到顶层路由集中处理，或者给每个路由都定义错误处理

### 默认错误元素
  - 1. 如果没有提供errorElement，则会渲染一个默认的错误提示，显示错误信息和错误栈

### 手动抛出异常
  - 1. 在loader或者action中抛出的异常将会被errorElement优先捕获，渲染对应组件

### 抛出响应异常(像服务端抛出一样)
  - 1. 如果你抛出一个响应，React Router 会在将响应数据返回到你的组件之前自动解析响应数据，错误信息使用useRouteError hook获取, isRouteErrorResponse可以判断是否是响应异常

### 总结
  - 无论错误发生在loader, action,还是rendering, 无论是一般错误还是响应错误，errorElement可以让错误统一管理
