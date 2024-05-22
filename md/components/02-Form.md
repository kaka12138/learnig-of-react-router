### Form
  - 1. Form组件是原生HTML form元素的封装, 它模拟浏览器进行客户端路由和数据处理
  - 2. Form并不像React生态中的那些组件，不具有验证和状态管理功能
  - 3. Form组件内数据的提交时，将会触发导航(不触发导航，可以使用useFetcher)，这些数据将以form-data形式传递到action对应的路由中(本来是传递到服务器的，但是被React Router拦截了)
  
### action
  - 1. 表单的提交地址
  - 2. 默认地址：原生表单的提交需要完整的URL, 而Form组件的提交地址是相对于最近路由的地址(一个上下文中的相对地址)
  - 3. 如果不需要默认地址，则要显式提供action的值

### method
  - 1. 表单提交的方法
  - 2. "get" | "post" | "put" | "patch" | "delete"
  - 3. 原生form只支持get,post,其他的方法是React Router的扩展
### submissions --- 提交
  - 1. 默认提交---get
    - 1.1 get提交将不会触发action的调用，像普通导航一样
    - 1.2 像url参数一样，一般用于参数的传递，可以在loader获取到
    - 1.3 React Route的处理过程: 将表单数据序列化处理成URLSeachParams, 然后导航到action+参数拼接的地址
  - 2. 触发数据变更的提交(非get) --- mutation
    - 2.1 React Router的处理过程: 
      - 用户提交表单，React Router将会匹配并调用action，此时的数据已经被序列化成FormData形式，可以在action中使用,
      - ***action处理完成，route中的loader将重新验证(revalidate),去保证UI和最新数据的同步***

### useSubmit --- 显式提交
  - 1. const submit = useSubmit()
  - 2. 提交的内容
    - 2.1 input元素
    - 2.2 react ref执向的元素
    - 2.3 FormData
    - 2.4 URLSearchParams
    - 2.5 JSON数据并指定encType: "application/json"
    - 2.6 纯文本数据并指定encType: "text/plain"
  - 3. 提交的配置项
    - method
    - action
    - fetcherKey
    - navigate
    - preventScrollReset
    - relative
    - replace
    - state
    - unstable_viewTransition

### navigate
  - 1. form提交后，默认会触发导航，但是可以navigate = {false}跳过导航，或者使用fetcher
  - navigate = {false} 等价于 useFetcher() + fetcher.Form
  - 2. 这里的跳过导航指的是: 无论是loader还是action都不会触发，并且state数据也不会传递,这个场景在只关心数据提交时很有用，不关心提交后的结果会影响UI可以选择跳过导航

### fetcherKey
  - 1. 当使用的是非导航表单时，可以使用该属性制定导航的key

### replace
  - 1. 当前表单进入history stack时的默认行为是push, 可以使用replace替换当前history stack中栈顶的一条记录
  - 2. replace默认值取决于表单的行为：
    - 1.1 get提交默认为false
    - 1.2 其他提交取决于formAction和action行为：
      - 1.2.1 action抛出错误, replace为false
      - 1.2.2 action重定向到当前地址, 为true
      - 1.2.3 action重定向到其他地址, 为false
      - 1.2.4 formAction为当前值地址, 为true
      - 1.2.5 其他情况为false
  - 总结：
    - 避免当点击返回按钮时，出现之前的数据结果
    - 这个一般用get提交

### relative
  - 1. 默认值是route, 可选path
  - 2. TODO: 测试

### reloadDocument
  - 1. 表示跳过React Router对表单提交的处理，这个提交将转发给浏览器

### state
  - 1. 为action对应的路径提供一个状态值，值会被存在history state中，可以使用useLocation获取
  - 2. 一个依赖history stack中记录中的数据

### preventScrollReset
  - 1. 如果正在使用<ScrollRestoration>, 这个属性可以阻止在表单提交后，滚动位置被重置到window顶部

### unstable_viewTransition
  - 1 TODO: View Transition 
