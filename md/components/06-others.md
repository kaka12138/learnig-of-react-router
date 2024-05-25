### Outlet
  - 1. 被用于在父路由中去渲染子路由的元素
  - 2. 如果父路由没有匹配到子元素，则会渲染Index Route内容

### Route
  - 1. 路由组件

### Routes
  - 1. 不限于根路由，可以在app的任何地方渲染, 一般和Route配合使用
  - 2. 它会从指定的location开始匹配其子路由
  - 3. 也可以使用Outlet组件渲染子路由
  - 4. 建议
    - 新版推荐使用data route，结合RouterProvider使用

### ScrollRestoration
  - 1. 该组件会模拟浏览器的滚动行为,在loader执行完成后, 确保滚动为恢复到右边顶部
  - 2. 推荐在根路由中使用

### getKey
  - 1. 返回一个key(默认为location.key),React Router用于重置滚动位置
  - 2. 在history中，每个entry(记录)都有与之对应的key用于重置滚动位置
  - 3. 根据其他依据，来定义这个重置行为
  ```jsx
  <ScrollRestoration
    getKey={(location, matches) => {
      return location.pathname;
    }}
  />
  ```

### preventing Scroll Reset
  - 1. 使用导航的preventScrollReset属性禁止重置
  - 2. 比如: Link, Form组件的preventScrollReset
