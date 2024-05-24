### NavLink
  - 1. 特殊的Link组件，并且知道当前链接的状态：active、pending, transitioning
  - 2. 使用场景
    - 2.1 tab或者breadcrumbs导航
    - 2.2 对屏幕阅读器提供了友好的上下文
    - 2.3 提供"transitioning"值，可以更细腻的控制View Transition

### 默认的active类名
  - 1. NavLink激活时，会将active添加为默认类名

### className
  - 1. 与其他元素上的className类型用法一致
  - 2. 也可以接受一个函数, 根据参数,isActive, isPending, isTransitioning控制className的值
  ```jsx
      <NavLink
        to="/messages"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Messages
      </NavLink>
  ```

### style
  - 1. 与其他元素上的style类型用法一致
  - 2. 和className一样，也可以接受一个函数, 根据参数,isActive, isPending, isTransitioning控制style的值

### children
  - 1. 可以传递一个渲染函数，根据参数,isActive, isPending, isTransitioning控制内容的值
  ```jsx
    <NavLink to="/tasks">
      {({ isActive, isPending, isTransitioning }) => (
        <span className={isActive ? "active" : ""}>Tasks</span>
      )}
    </NavLink>
  ```

### end
  - 1. 规定to和URL的匹配规则，会影响active和pending的值
  - 2. end: 值匹配以to的值结尾的URL
  ```jsx
    <!-- /tasks, /tasks/new, /tasks/123 -->
    <NavLink to="/tasks" />
    <!-- /tasks -->
    <NavLink to="/tasks" end/>
  ```
  - 3. 注意:根路由（to="/"）会忽略end的效果

### caseSensitive
  - 1. to的值是否区分大小写

### aria-current
  - 1. 给当前激活的NavLink添加aria-current属性，值为"page"

### reloadDocument
  - 1. 跳过的客户端路由，交给浏览器控制其行为(这里是a标签的默认行为)

### unstable_viewTransition
  - TODO：
