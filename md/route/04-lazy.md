### lazy配置作用
  - 1. 根据路由进行代码分割

### lazy使用
  - 1. 路由配置的lazy选项: 提供一个async函数, 该函数回relsolve路由定义中非路由匹配的部分(loader, action, Component, ErrorBoundary等)
  - 2. 像path,index,children，caseSensitive这些数据静态部分的定义，用于路由匹配的，不能方法lazy route中
  - 3. lazy route文件中不能有default导出
  - 4. 目前来看,导出element/errorElement无效，要导出Component/ErrorBoundary才行

### lazy被执行时机
  - 1. 初始化, loading, submitting, 导航, 或者fetcher调用时

### 静态部分
  - 1. 路由上静态定义的属性，不能被lazy route中覆盖，否则会抛出警告
  - 2. 优化：定义静态的loader/action
      - 1. 可以让loader/action和lazy route并行加载

### 单个文件中的多个路由
  - 场景
    - 1. 可以在一个文件中定义多个lazy route, 在使用import动态导入时，可以分别使用
  - 作用
    - 2. 对于现在带的打包器，就可以将这些route打进到同一个bundle中，减少请求数量，提高加载速度
