### Link Component
  - 1. 导航组件，react router将其渲染成a标签，可以跳转到不同的页面
  - 2. 使用reloadDocument属性可以跳过客户端路由导航,让浏览器控制其行为

### relative
  - 1. 相对链接：不是以/开头的
  - 2. 默认值为：route, 相对于其父路由, 用于路由嵌套的场景
  - 3. 可选值：path, 相对于当前路由上下文，用于同级路由的场景

### preventScrollReset
  - 1. 当点击Link时,如果正在使用<ScrollRestoration>组件，可以阻止滚动位置重置为window顶部

### replace
  - 1. 进行history stack的行为

### state
  - 1. 一个依赖于history stack的值，用于发生导航时传递给新的导航
  - 2. 使用useLocation hook获取当前路由的state

### reloadDocument
  - 1. 表示跳过客户端路由, 交给浏览器处理(这里处理的是a标签的行为)

### unstable_viewTransition
  - 1. TODO:
