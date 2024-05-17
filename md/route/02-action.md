### action
  - 概述
    - 1. route action可以理解为"写", 而route loader可以理解为"读"
    - 2. 当app发送非get请求(如post, put, delete, patch)时，才会调用action
    - 3. 具体的触发方式
      - 3.1 Form组件提交数据
      - 3.2 fetcher.Form组件提交数据
      - 3.3 useSubmit显式提交数据
      
### params
  - 1. 捕获的是dynamic segments的值
  - 2. 获取params值的方式
    - 2.1 在action和loader中的params对象中获取到params的值, 
    - 2.2 在组件中使用useParams获取到params的值

### request
  - 1. 为Fetch Request的实例，用于解析请求中的FormData，该值被自动序列化处理了
  - 2. 在使用html提供的form元素提交表单时，表单请求会发送到服务器，而使用React Router 提供的Form组件提交表单时，表单请求会被发送的route action中

### 可选的序列化类型
  - 1. 在使用useSubmit时，可以指定序列化类型, 如encType: "application/json" or encType: "text/plain"

### action 返回值
  - 1. 可以返回任何值，该值可以通过useActionData获取
  - 2. 或者返回一个web Response(基于fetchAPI的)

### 在action中抛出错误
  - 1. 可以在action中抛出错误，以便停止当前的代码，错误将会React Router捕获(errorElement)

### 在一个路由中处理多个action
  - 1. 使用button的name/value，在action进行区分（建议）
  - 2. 使用request.method进行区分
  - 3. 通过切换发送按钮来区分
