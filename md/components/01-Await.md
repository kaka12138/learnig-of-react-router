### Await组件
  1. 配合defer, Suspense使用，处理获取延迟数据的问题

### 属性
  1. children
    - children的渲染使用方式和useAsyncValue hook等价
  2. errorElement
    - errorElement属性可以自定义获取延迟数据时错误渲染
    - 使用useAsyncError hook获取延迟数据错误信息, 再自定义错误组件的渲染，再传递给errorElement属性
  3. resolve
    - 1. 一个promise实例, 数据来自loader中defer处理后的返回值
