### loader
  - 1. 每个路由都可以定义一个loader函数，在路由渲染之前, 用于给route element提供数据
  - 2. 在发生导航时，匹配到的路由，其loader会被并行调用
  - 3. 使用useLoaderData hook获取loader数据,在组件中使用

### params
  - 1. 路由中dynamic segments将被解析并传递给loader

### request
  - 1. 一个Fetch Request实例
  - 2. React Router阻止了浏览器的默认行为（a标签, submit提交等），将请求(request)转发到了loader
  - 3. 使用场景
    ```js
    // 获取URL参数
    function loader({ request }) {
      const url = new URL(request.url);
      const searchTerm = url.searchParams.get("q");
      return searchProducts(searchTerm);
    }
    ```
### returning Responses
  - 1. 在loader中可以返回任何值, 并使用useLoaderData hook获取
  - 2. 也可以返回一个web Response对象
    - 1.一般返回一个fetch请求
    ```js
    function loader({ request }) {
      return fetch("/api/teams.json", {
        signal: request.signal,
      });
    }
    ```
    - 2. 也可以返回一个自定义的Response对象
    ```js
    function loader() {
      return new Response(JSON.stringify({ teams: ["A", "B", "C"] }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    ```
    - 3. 可以使用React Router提供的json返回
    ```js
    import { json } from "react-router-dom";
    function loader({ request, params }) {
      const data = { some: "thing" };
      return json(data, { status: 200 });
    }
    ```

### throw errors/reponses errors in Loader
  - 1. 可以抛出一般的错误或者reponses类型的错误
