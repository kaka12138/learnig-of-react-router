### shouldRevalidate
  - 1. 允许你选择性的重新验证路由的loader
  - 2. 简单理解，重新执行一遍loader

### 数据重新验证的场景
  - 1. 在action重新调用后
    - 1.1 <Form>, <fetcher.Form>, useSubmit, or fetcher.submit

  - 2. 显式的使用useRevalidator hook触发重新验证
  - 3. 当一个已经渲染路由的URL参数(dynamic segment)发生变化时, 触发重新验证
  - 4. 当URL Search参数发生变化时, 触发重新验证
  - 5. 导航到与当前URL相同的URL时, 触发重新验证
  - 6. 当一个路由定义了shouldRevalidate选项时, 会首先检查该函数，如果该函数返回false, loader不会重新验证并使用loader中缓存的数据渲染页面
